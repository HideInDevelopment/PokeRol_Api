class User {
  constructor({
    id,
    name,
    email,
    picture,
    team = [],
    bag = [],
    gold,
    badges = [],
    achivements = [],
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.picture = picture;
    this.team = team;
    this.bag = bag;
    this.gold = gold;
    this.badges = badges;
    this.achivements = achivements;
  }

  //Functions to manage some user interactions

  //Function to add a new member to user team
  addToTeam(member) {
    if (this.team.length < User.MAX_TEAM_SIZE) {
      this.team.push(member);
      return true;
    } else return false;
  }

  //Function to add an item to the user bag
  addToBag(item) {
    if (this.bag.length < User.MAX_BAG_SIZE) {
      this.bag.push(item);
      return true;
    } else return false;
  }

  //Function to add a new badge
  addBadge(badge) {
    if (this.badges.length < User.MAX_BADGES) {
      this.badges.push(badge);
      return true;
    } else return false;
  }

  //Function to add a new achivement
  addAchivement(achivement) {
    if (!this.achivements.find((x) => x == achivement)) {
      this.achivements.push(achivement);
      return true;
    } else return false;
  }
}

User.MAX_TEAM_SIZE = 6;
User.MAX_BADGES = 8;
User.MAX_BAG_SIZE = 30;

export default User;
