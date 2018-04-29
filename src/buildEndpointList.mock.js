// Partial list of endpoints that should cover our test cases
module.exports = {
  namespace: 'wp/v2',
  routes: {
    '/wp/v2': {
      namespace: 'wp/v2',
      methods: ['GET'],
      endpoints: [
        {
          methods: ['GET'],
          args: {
            namespace: {
              required: false,
              default: 'wp/v2'
            },
            context: {
              required: false,
              default: 'view'
            }
          }
        }
      ],
      _links: {
        self: 'https://wp.lvh.me/wp-json/wp/v2'
      }
    },
    '/wp/v2/posts': {
      namespace: 'wp/v2',
      methods: ['GET', 'POST'],
      endpoints: [
        {
          methods: ['GET'],
          args: {}
        },
        {
          methods: ['POST'],
          args: {
            date: {
              required: false,
              description: "The date the object was published, in the site's timezone.",
              type: 'string'
            },
            date_gmt: {
              required: false,
              description: 'The date the object was published, as GMT.',
              type: 'string'
            },
            slug: {
              required: false,
              description: 'An alphanumeric identifier for the object unique to its type.',
              type: 'string'
            },
            status: {
              required: false,
              enum: ['publish', 'future', 'draft', 'pending', 'private'],
              description: 'A named status for the object.',
              type: 'string'
            },
            password: {
              required: false,
              description: 'A password to protect access to the content and excerpt.',
              type: 'string'
            },
            title: {
              required: false,
              description: 'The title for the object.',
              type: 'object'
            },
            content: {
              required: false,
              description: 'The content for the object.',
              type: 'object'
            },
            author: {
              required: false,
              description: 'The ID for the author of the object.',
              type: 'integer'
            },
            excerpt: {
              required: false,
              description: 'The excerpt for the object.',
              type: 'object'
            },
            featured_media: {
              required: false,
              description: 'The ID of the featured media for the object.',
              type: 'integer'
            },
            comment_status: {
              required: false,
              enum: ['open', 'closed'],
              description: 'Whether or not comments are open on the object.',
              type: 'string'
            },
            ping_status: {
              required: false,
              enum: ['open', 'closed'],
              description: 'Whether or not the object can be pinged.',
              type: 'string'
            },
            format: {
              required: false,
              enum: ['standard', 'aside', 'chat', 'gallery', 'link', 'image', 'quote', 'status', 'video', 'audio'],
              description: 'The format for the object.',
              type: 'string'
            },
            meta: {
              required: false,
              description: 'Meta fields.',
              type: 'object'
            },
            sticky: {
              required: false,
              description: 'Whether or not the object should be treated as sticky.',
              type: 'boolean'
            },
            template: {
              required: false,
              description: 'The theme file to use to display the object.',
              type: 'string'
            },
            categories: {
              required: false,
              description: 'The terms assigned to the object in the category taxonomy.',
              type: 'array',
              items: {
                type: 'integer'
              }
            },
            tags: {
              required: false,
              description: 'The terms assigned to the object in the post_tag taxonomy.',
              type: 'array',
              items: {
                type: 'integer'
              }
            }
          }
        }
      ],
      _links: {
        self: 'https://wp.lvh.me/wp-json/wp/v2/posts'
      }
    },
    '/wp/v2/posts/(?P<id>[\\d]+)': {
      namespace: 'wp/v2',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      endpoints: [
        {
          methods: ['GET'],
          args: {
            id: {
              required: false,
              description: 'Unique identifier for the object.',
              type: 'integer'
            },
            context: {
              required: false,
              default: 'view',
              enum: ['view', 'embed', 'edit'],
              description: 'Scope under which the request is made; determines fields present in response.',
              type: 'string'
            },
            password: {
              required: false,
              description: 'The password for the post if it is password protected.',
              type: 'string'
            }
          }
        },
        {
          methods: ['POST', 'PUT', 'PATCH'],
          args: {
            id: {
              required: false,
              description: 'Unique identifier for the object.',
              type: 'integer'
            },
            date: {
              required: false,
              description: "The date the object was published, in the site's timezone.",
              type: 'string'
            },
            date_gmt: {
              required: false,
              description: 'The date the object was published, as GMT.',
              type: 'string'
            },
            slug: {
              required: false,
              description: 'An alphanumeric identifier for the object unique to its type.',
              type: 'string'
            },
            status: {
              required: false,
              enum: ['publish', 'future', 'draft', 'pending', 'private'],
              description: 'A named status for the object.',
              type: 'string'
            },
            password: {
              required: false,
              description: 'A password to protect access to the content and excerpt.',
              type: 'string'
            },
            title: {
              required: false,
              description: 'The title for the object.',
              type: 'object'
            },
            content: {
              required: false,
              description: 'The content for the object.',
              type: 'object'
            },
            author: {
              required: false,
              description: 'The ID for the author of the object.',
              type: 'integer'
            },
            excerpt: {
              required: false,
              description: 'The excerpt for the object.',
              type: 'object'
            },
            featured_media: {
              required: false,
              description: 'The ID of the featured media for the object.',
              type: 'integer'
            },
            comment_status: {
              required: false,
              enum: ['open', 'closed'],
              description: 'Whether or not comments are open on the object.',
              type: 'string'
            },
            ping_status: {
              required: false,
              enum: ['open', 'closed'],
              description: 'Whether or not the object can be pinged.',
              type: 'string'
            },
            format: {
              required: false,
              enum: ['standard', 'aside', 'chat', 'gallery', 'link', 'image', 'quote', 'status', 'video', 'audio'],
              description: 'The format for the object.',
              type: 'string'
            },
            meta: {
              required: false,
              description: 'Meta fields.',
              type: 'object'
            },
            sticky: {
              required: false,
              description: 'Whether or not the object should be treated as sticky.',
              type: 'boolean'
            },
            template: {
              required: false,
              description: 'The theme file to use to display the object.',
              type: 'string'
            },
            categories: {
              required: false,
              description: 'The terms assigned to the object in the category taxonomy.',
              type: 'array',
              items: {
                type: 'integer'
              }
            },
            tags: {
              required: false,
              description: 'The terms assigned to the object in the post_tag taxonomy.',
              type: 'array',
              items: {
                type: 'integer'
              }
            }
          }
        },
        {
          methods: ['DELETE'],
          args: {
            id: {
              required: false,
              description: 'Unique identifier for the object.',
              type: 'integer'
            },
            force: {
              required: false,
              default: false,
              description: 'Whether to bypass trash and force deletion.',
              type: 'boolean'
            }
          }
        }
      ]
    },
    '/wp/v2/users/me': {
      namespace: 'wp/v2',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      endpoints: [
        {
          methods: ['GET'],
          args: {
            context: {
              required: false,
              default: 'view',
              enum: ['view', 'embed', 'edit'],
              description: 'Scope under which the request is made; determines fields present in response.',
              type: 'string'
            }
          }
        },
        {
          methods: ['POST', 'PUT', 'PATCH'],
          args: {
            username: {
              required: false,
              description: 'Login name for the user.',
              type: 'string'
            },
            name: {
              required: false,
              description: 'Display name for the user.',
              type: 'string'
            },
            first_name: {
              required: false,
              description: 'First name for the user.',
              type: 'string'
            },
            last_name: {
              required: false,
              description: 'Last name for the user.',
              type: 'string'
            },
            email: {
              required: false,
              description: 'The email address for the user.',
              type: 'string'
            },
            url: {
              required: false,
              description: 'URL of the user.',
              type: 'string'
            },
            description: {
              required: false,
              description: 'Description of the user.',
              type: 'string'
            },
            locale: {
              required: false,
              enum: ['', 'en_US'],
              description: 'Locale for the user.',
              type: 'string'
            },
            nickname: {
              required: false,
              description: 'The nickname for the user.',
              type: 'string'
            },
            slug: {
              required: false,
              description: 'An alphanumeric identifier for the user.',
              type: 'string'
            },
            roles: {
              required: false,
              description: 'Roles assigned to the user.',
              type: 'array',
              items: {
                type: 'string'
              }
            },
            password: {
              required: false,
              description: 'Password for the user (never included).',
              type: 'string'
            },
            meta: {
              required: false,
              description: 'Meta fields.',
              type: 'object'
            }
          }
        },
        {
          methods: ['DELETE'],
          args: {
            force: {
              required: false,
              default: false,
              description: 'Required to be true, as users do not support trashing.',
              type: 'boolean'
            },
            reassign: {
              required: true,
              description: "Reassign the deleted user's posts and links to this user ID.",
              type: 'integer'
            }
          }
        }
      ],
      _links: {
        self: 'https://wp.lvh.me/wp-json/wp/v2/users/me'
      }
    }
  }
};
