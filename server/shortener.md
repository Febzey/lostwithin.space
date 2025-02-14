# URL Shortener Service

This service provides a URL shortening feature. Users can submit a long URL and receive a shortened URL in return. The service also handles redirection from the shortened URL to the original URL.

## Endpoints

### POST /shorten

- **Description**: Shortens a given URL.
- **Request Body**:
  - `originalUrl` (string): The URL to be shortened.
- **Response**:
  - `originalUrl` (string): The original URL.
  - `shortenedUrl` (string): The shortened URL.
  - `createdAt` (string): The timestamp when the URL was shortened.

### GET /:shortenedUrl

- **Description**: Redirects to the original URL corresponding to the given shortened URL.
- **Parameters**:
  - `shortenedUrl` (string): The shortened URL path.
- **Response**:
  - Redirects to the original URL if found.
  - Returns a 404 error if the shortened URL is not found.

## Example Workflow

1. **Shorten a URL**:
   - Send a POST request to `/shorten` with the `originalUrl` in the request body.
   - Receive a response containing the `originalUrl`, `shortenedUrl`, and `createdAt`.

2. **Redirect to the Original URL**:
   - Access the shortened URL in a browser or via a GET request.
   - The service will redirect to the original URL if it exists.

## Notes

- The shortened URL is generated dynamically using the server's protocol and hostname.
- The service stores the original and shortened URLs along with the creation timestamp in a JSON file.
- The JSON file is located at `server/src/controllers/shortenedUrls.json`.