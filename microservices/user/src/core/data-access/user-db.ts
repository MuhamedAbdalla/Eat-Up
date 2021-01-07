import { User } from "../entities/user";
import { UserDb } from "../usecases";
import { DATABASE } from "../../config";
import { db, userDb } from "./index";

export default class makeUserDb implements UserDb {
    async insert(user: User): Promise<boolean> {
        let userKey = (await db.ref(DATABASE.USER_COLLECTION_ENTRY).push(user.toJson())).key;
        return userKey != null;
    }
    update(user: User): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(user: User): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    get(value: string, field: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    follow(follower_id: any, following_id: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
