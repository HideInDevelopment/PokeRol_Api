# PokeRol API

The idea is to build something like a pokemon game or maybe an animated Pokedex, will see.

## FolderArchitecture:

/POKEROL_API
│
├── /src
│ ├── /application -> Application layer (orchestration)
│ │ ├── /services -> Application use cases (business logic)
│ │ ├── /ports -> Ports: interfaces that define how to interact with the kernel
│ │ └── /events -> Publication and subscription to events, if using Event-Driven (not sure yet)
│ │
│ ├── /domain -> Domain layer (application core)
│ │ ├── /entities -> Domain entities (domain objects)
│ │ ├── /repositories -> Interfaces for repositories (persistence abstraction)
│ │ ├── /services -> Domain services (pure logic)
│ │ └── /value-objects -> Value objects (immutable domain logic)
│ │
│ ├── /infrastructure -> Adapters and infrastructure details
│ │ ├── /database -> Adapters for persistence (MongoDB)
│ │ ├── /http -> HTTP Adapters (Express.js)
│ │ ├── /logger -> Logging (Winston)
│ │ └── /repositories -> Concrete implementations of domain-defined repositories
│ │
│ ├── /config -> General system configurations
│ │ ├── appConfig.js -> Application configuration
│ │ └── database.js -> Database configuration
│ │
│ └── /interfaces -> External interface adapters (ports)
│ ├── /api -> REST API endpoints
│ ├── /controllers -> Controllers to handle HTTP requests and responses
│ └── /middlewares -> Security middleware, validations, etc.
│
├── /tests -> Unit and integral testing
│ ├── /unit -> Unit testing
│ └── /integration -> Integration tests
│
├── /scripts -> Scripts for automation and configuration
│
├── .env -> Environment variables
├── .gitignore -> Files to be ignored by git
├── package.json -> Project dependencies and npm scripts
├── README.md -> Project documentation
└── server.js -> Main application entry
