import Array "mo:base/Array";

actor {
  private stable var users: [(Text, Text, Text)] = [];

  public func registerUser(name: Text, email: Text, password: Text) : async Text {
    users := Array.append(users, [(name, email, password)]);
    return "Registration successful: " # name;
  };

  public query func getUsers() : async [(Text, Text, Text)] {
    return users;
  };
};
