function bestFriend (friends){
    let myFriend = friends[0];
    for(i = 0; i <friends.length; i++){
        const friend = friends[i];
        if(friend.length > myFriend.length){
            myFriend = friend;
        }
    }
    return myFriend;
}
const friends = ["Saqib", "Soleh", "Mariam", "Saad Ahmad", "Aisha"];
const myBestFriend = bestFriend(friends);
console.log(myBestFriend);