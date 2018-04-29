const buildEndpointList = require('./buildEndpointList');
const mockApiSpec = require('./buildEndpointList.mock');

process.env.WP_API_PATH = '/wp/v2';

describe('Test function list generation', () => {
  it('Should include the appropriate functions', () => {
    const endpointList = buildEndpointList(mockApiSpec); //?
    // const result = Object.keys(endpointList);
    // const expected = [
    //   'getPosts',
    //   'postPosts',
    //   'getPostsById',
    //   'postPostsById',
    //   'putPostsById',
    //   'patchPostsById',
    //   'deletePostsById',
    //   'getUsersMe',
    //   'postUsersMe',
    //   'putUsersMe',
    //   'patchUsersMe',
    //   'deleteUsersMe'
    // ];
    expect(endpointList).toMatchSnapshot();
  });
});
