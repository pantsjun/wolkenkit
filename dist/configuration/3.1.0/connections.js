'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var connections =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var configuration, sharedKey, result;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            configuration = _ref.configuration, sharedKey = _ref.sharedKey;

            if (configuration) {
              _context.next = 3;
              break;
            }

            throw new Error('Configuration is missing');

          case 3:
            if (sharedKey) {
              _context.next = 5;
              break;
            }

            throw new Error('Shared key is missing');

          case 5:
            result = {
              api: {
                container: {
                  http: {
                    hostname: 'broker',
                    port: 80
                  }
                },
                external: {
                  https: {
                    hostname: configuration.api.host.name,
                    port: configuration.api.port
                  },
                  http: {
                    hostname: configuration.api.host.name,
                    port: configuration.api.port + 10
                  }
                }
              },
              fileStorage: {
                container: {
                  http: {
                    hostname: 'depot',
                    port: 80
                  }
                },
                external: {
                  https: {
                    hostname: configuration.api.host.name,
                    port: configuration.api.port + 1
                  },
                  http: {
                    hostname: configuration.api.host.name,
                    port: configuration.api.port + 11
                  }
                }
              },
              debugging: {
                broker: {
                  port: configuration.api.port + 20
                },
                core: {
                  port: configuration.api.port + 21
                },
                flows: {
                  port: configuration.api.port + 22
                }
              },
              eventStore: {
                type: 'postgres',
                container: {
                  pg: {
                    protocol: 'pg',
                    user: 'wolkenkit',
                    password: sharedKey,
                    database: 'wolkenkit',
                    hostname: 'eventstore',
                    port: 5432
                  }
                },
                external: {
                  pg: {
                    protocol: 'pg',
                    user: 'wolkenkit',
                    password: sharedKey,
                    database: 'wolkenkit',
                    hostname: configuration.api.host.name,
                    port: configuration.api.port + 30
                  }
                }
              },
              listStore: {
                type: 'mongodb',
                container: {
                  mongodb: {
                    protocol: 'mongodb',
                    user: 'wolkenkit',
                    password: sharedKey,
                    database: 'wolkenkit',
                    hostname: 'liststore',
                    port: 27017
                  }
                },
                external: {
                  mongodb: {
                    protocol: 'mongodb',
                    user: 'wolkenkit',
                    password: sharedKey,
                    database: 'wolkenkit',
                    hostname: configuration.api.host.name,
                    port: configuration.api.port + 31
                  }
                }
              },
              commandBus: {
                type: 'rabbitmq',
                container: {
                  amqp: {
                    protocol: 'amqp',
                    user: 'wolkenkit',
                    password: sharedKey,
                    hostname: 'messagebus',
                    port: 5672
                  },
                  http: {
                    port: 15672
                  }
                },
                external: {
                  amqp: {
                    port: configuration.api.port + 32
                  },
                  http: {
                    port: configuration.api.port + 33
                  }
                }
              },
              eventBus: {
                type: 'rabbitmq',
                container: {
                  amqp: {
                    protocol: 'amqp',
                    user: 'wolkenkit',
                    password: sharedKey,
                    hostname: 'messagebus',
                    port: 5672
                  },
                  http: {
                    port: 15672
                  }
                },
                external: {
                  amqp: {
                    port: configuration.api.port + 32
                  },
                  http: {
                    port: configuration.api.port + 33
                  }
                }
              },
              flowBus: {
                type: 'rabbitmq',
                container: {
                  amqp: {
                    protocol: 'amqp',
                    user: 'wolkenkit',
                    password: sharedKey,
                    hostname: 'messagebus',
                    port: 5672
                  },
                  http: {
                    port: 15672
                  }
                },
                external: {
                  amqp: {
                    port: configuration.api.port + 32
                  },
                  http: {
                    port: configuration.api.port + 33
                  }
                }
              }
            };
            return _context.abrupt("return", result);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function connections(_x) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = connections;