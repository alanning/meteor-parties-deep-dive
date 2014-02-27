// All Tomorrow's Parties -- data model
// Loaded on both the client and the server

///////////////////////////////////////////////////////////////////////////////
// Parties

/*
  Each party is represented by a document in the Parties collection:
    x, y: Number (screen coordinates in the interval [0, 1])
    title, description: String
*/
Parties = new Meteor.Collection("parties");
