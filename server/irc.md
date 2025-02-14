# IRC Service

This service provides a WebSocket-based IRC chat system. Users can connect, validate their keys, and send messages. The service also maintains a list of connected users and their chat history.

## WebSocket URL

`ws://localhost:3000/irc`

## Message Types

### 1. validate

- **Description**: Validates the user with a provided key and client type.
- **Payload**:
  - `type`: "validate"
  - `key`: The user's key.
  - `client`: The client type (e.g., "website", "app", "discord", "mc").

### 2. message

- **Description**: Sends a message to the chat.
- **Payload**:
  - `type`: "message"
  - `message`: The message content.

### 3. chat-history

- **Description**: Provides the chat history to the user.
- **Payload**:
  - `type`: "chat-history"
  - `history`: An array of the most recent messages.

### 4. users

- **Description**: Provides the list of currently connected users.
- **Payload**:
  - `type`: "users"
  - `users`: An array of user objects, each containing `username` and `client`.

### 5. error

- **Description**: Sends an error message to the user.
- **Payload**:
  - `type`: "error"
  - `message`: The error message content.

## Example Workflow

1. **Connect to the WebSocket**: Establish a connection to the WebSocket URL.
2. **Validate the User**: Send a validation message with the user's key and client type.
3. **Handle Incoming Messages**: Listen for incoming messages and handle them based on their type.
4. **Send a Message**: Send a message to the chat.
5. **Handle WebSocket Events**: Handle WebSocket close and error events.

## Notes

- The service supports multiple client types, allowing users to connect from different platforms (e.g., website, app, discord bot, mc mod).
- The chat history is limited to the most recent 100 messages.
- The user list includes the username and client type for each connected user.