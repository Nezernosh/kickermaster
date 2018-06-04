import { types, flow } from "mobx-state-tree";
import api from "../api";
import User from "./user";
import Game from "./game";

const Store = types
  .model({
    users: types.optional(types.array(User), []),
    games: types.optional(types.array(Game), [])
  })
  .actions(self => {
    return {
      loadUsers: flow(function*() {
        const { users } = yield api.get("/api/users");
        self.users = users;
      }),
      loadGames: flow(function*() {
        const { games } = yield api.get("/api/games");
        self.games = games;
      })
    };
  });

export const store = Store.create({});
