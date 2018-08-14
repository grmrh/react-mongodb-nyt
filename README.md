# MERN and notification with socket.io
Mongo-Express-React-Node and Socket.io

#### https://afternoon-oasis-35225.herokuapp.com/
#### https://github.com/grmrh/Game-loved-by-all

API call to New York Times article repository, save and delete articles from the database. Each saving of articles triggers to broadcast to all connected users including self. 

## additional tool
* bootstrap and its javascript

## Design architecture
* Two stateful and several stateless react components
* React router
* Socket.io provides a sort of real-time communication between client and server 

## Usage
* start the application by searching NYT articles. Enter search parameters. 
* One can save any number of articles returned from NYT API call.
* One can see the notification message appear in the screen as self or others save articles.
* "Saved artices" directs user to the screen that shows articles saved in the database, where the user can delete them as wish.
  
## Database 
* mongodb and mongoose ORM (or ODM as someone says so...)

## Authors
* me
* The most of time to complete this application spent on making the real-time notification work.

## Questions/suggestions
* Please direct all questions/suggestions to me.



