# Notification System Design

## Stage 1

### Priority Inbox

Notifications are prioritized using:

1. Placement
2. Result
3. Event

Weight Assignment:

* Placement = 3
* Result = 2
* Event = 1

Notifications with higher weights are shown first. For notifications having the same weight, the most recent notification is displayed first.

### Top N Notifications

Algorithm:

1. Fetch notifications.
2. Assign priority weight.
3. Sort by:

   * Weight (descending)
   * Timestamp (descending)
4. Display top N notifications.

### Handling Incoming Notifications

Whenever a new notification arrives:

1. Calculate priority.
2. Insert into sorted collection.
3. Maintain only the highest-priority notifications.

---

## Stage 2

### Frontend

* React.js
* Responsive Design
* Notification Listing
* API Integration
* Error Handling

### Backend

* Node.js
* Express.js
* REST APIs
* Logging Middleware

### APIs

#### GET /api/notifications

Returns all notifications.

#### POST /api/notifications

Creates a new notification.

### Logging Middleware

The application uses reusable logging middleware to capture:

* Request Method
* Request URL
* Timestamp

This middleware is attached globally and logs every incoming request.

### Project Structure

* logging_middleware
* notification_app_be
* notification_app_fe
* screenshots
* notification_system_design.md
