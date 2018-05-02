function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Splits the route path into pieces and also removes the base path
 * @param {string} route
 */
function getRoutePieces(route) {
  route = route.replace(process.env.WP_API_PATH, '');
  return route.substr(1).split('/'); //?
}

const removeBaseRoute = (route) => route !== process.env.WP_API_PATH;

/**
 * Returns a breakdown of each piece of the route name's purpose.
 * Is one piece part of the resource (main) or is it what you're
 * searching by (by), or is it just the method (method)?
 * @param {string} method
 * @param {*} routePieces
 */
function getRouteNameBreakdown(method, routePieces) {
  const initialDefinition = [{ title: method.toLowerCase(), type: 'method' }];
  return routePieces.reduce((definition, piece) => {
    const paramStartIndex = piece.indexOf('<');
    if (paramStartIndex > -1) {
      const paramEndIndex = piece.indexOf('>');
      // TODO: wat
      piece = piece.substr(paramStartIndex + 1, paramEndIndex - paramStartIndex - 1).trim(); //?
      definition.push({ title: piece, type: 'by' });
    } else {
      definition.push({ title: piece, type: 'main' });
    }
    return definition;
  }, initialDefinition); //?
}

/**
 * Should be able to return names like
 * getPostsByIdAndFudge, getPostsById, getPostsAndComments
 * @param {string[]} routeNamePieces
 */
function getRouteName(routeNamePieces) {
  return routeNamePieces.reduce((name, piece) => {
    let lastWasBy = false;
    let lastWasMain = false;
    const title = capitalizeFirstLetter(piece.title.toLowerCase());
    if (piece.type === 'main') {
      name += lastWasMain ? `And${title}` : title;
      lastWasBy = false;
      lastWasMain = true;
    } else if (piece.type === 'by') {
      name += lastWasBy ? `AndBy${title}` : `By${title}`;
      lastWasBy = true;
      lastWasMain = false;
    } else {
      name += piece.title;
    }
    return name;
  }, '');
}

/**
 * Puts together a dictionary of "args" that are actually route params.
 * @param {*} routeNamePieces
 * @param {*} args
 */
function getRouteParams(routeNamePieces, args) {
  routeNamePieces;
  return Object.keys(args).reduce((params, argKey) => {
    const found = routeNamePieces.filter((piece) => piece.type === 'by' && piece.title === argKey).length > 0;
    if (found) {
      params[argKey] = args[argKey];
    }
    return params;
  }, {});
}

/**
 * Removes url params from the args dictionary
 * @param {*} routeNamePieces
 * @param {*} args
 */
function filterRouteParamsFromArgs(routeNamePieces, args) {
  routeNamePieces;
  return Object.keys(args).reduce((remainingArgs, argKey) => {
    const found = routeNamePieces.filter((piece) => piece.type === 'by' && piece.title === argKey).length > 0;
    if (!found) {
      remainingArgs[argKey] = args[argKey];
    }
    return remainingArgs;
  }, {});
}

function tokenizeRouteParams(route, params) {
  const routePieces = route.split('/').slice(1);
  routePieces;
  const result = routePieces
    .reduce((pieces, piece) => {
      let found = false;
      Object.keys(params).forEach((param) => {
        if (piece.indexOf(param) > -1) {
          pieces.push(`" + ${param} + "`);
          found = true;
          return;
        }
      });
      if (!found) {
        pieces.push(piece);
      }
      return pieces;
    }, [])
    .join('/'); //?

  return `"${result}"`; //?
}
/**
 * @param {Object} apiSpec JSON from response
 */
function buildEndpointList(apiSpec) {
  const { routes } = apiSpec;
  return Object.keys(routes)
    .filter(removeBaseRoute)
    .reduce((methods, route) => {
      route; //?
      routes[route].endpoints.reduce((endpoints, endpoint) => {
        // routes.endpoints.methods
        endpoint.methods.forEach((method) => {
          method; //?
          // for each method get data from routes.endpoints
          let { args } = endpoint; //?
          const routePieces = getRoutePieces(route);
          const routeNameBreakdown = getRouteNameBreakdown(method, routePieces); //?
          const routeName = getRouteName(routeNameBreakdown); //?
          const params = getRouteParams(routeNameBreakdown, args);
          args = filterRouteParamsFromArgs(routeNameBreakdown, args);
          const tokenizedRoute = tokenizeRouteParams(route, params);
          methods[routeName] = {
            route: tokenizedRoute,
            name: routeName,
            params,
            args,
            method,
            hasBody: method !== 'GET' && method !== 'HEAD' ? true : false
          };
        });
      }, {});
      return methods; //?
    }, {});
}

module.exports = buildEndpointList;
