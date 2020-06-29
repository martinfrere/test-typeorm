import { getRepository } from "typeorm";
import { User } from "./entity/User";
import { Tweet } from "./entity/Tweet";

export const Bootstrap = async () => {
    const userRepo = getRepository(User);
    const user = userRepo.create({firstName: "Martin", lastName: "Frere", age: 26});
    userRepo
    .save(user)
    .catch((err) => {
        console.log("Error : ", err);
    });
    console.log("New user saved : ", user);

    const tweetRepo = getRepository(Tweet);
    const tweet = new Tweet();
    tweet.title = "I finally got a new job";
    tweet.content = "I finally got a super job as a junior developer and can now offer nice gifts to my family";
    tweet.user = Promise.resolve(user);

    await tweetRepo.save(tweet).catch((err) => console.log(err));
};

export const find = async () => {

    const userRepo = getRepository(User);
    const user = await userRepo
    
    .findOne({where: {firstName: "Martin"}})
    .catch((err) => {
        console.log(err);
    });

    if(user)
        console.log("User : ", user, await user.tweets);
};