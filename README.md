# Project REST-Rant

REST-Rant is an app where users can review restaurants.

installed express and express-react-views

| Method | Path             | Purpose                                                                         |   |   |   |   |   |   |   |
|--------|------------------|---------------------------------------------------------------------------------|---|---|---|---|---|---|---|
| GET    | /                | The home page                                                                   |   |   |   |   |   |   |   |
| GET    | /places          | Index page listing all places                                                   |   |   |   |   |   |   |   |
| GET    | /places/new      | New form for a place                                                            |   |   |   |   |   |   |   |
| POST   | /places          | Create a new place                                                              |   |   |   |   |   |   |   |
| GET    | /places/:id      | Show one place in detail (Associated rants, new rant form, delete rant button)  |   |   |   |   |   |   |   |
| GET    | /places/:id/edit | Edit form for a place                                                           |   |   |   |   |   |   |   |
| PUT    | /places/:id      | Make changes to existing place                                                  |   |   |   |   |   |   |   |
| DELETE | /places/:id      | Delete a place                                                                  |   |   |   |   |   |   |   |
| POST   | /places/:id/rant | Add rant to a place                                                             |   |   |   |   |   |   |   |

| Field    | Type       |   |   |   |   |   |   |   |   |
|----------|------------|---|---|---|---|---|---|---|---|
| _id      | Object ID  |   |   |   |   |   |   |   |   |
| name     | String     |   |   |   |   |   |   |   |   |
| city     | String     |   |   |   |   |   |   |   |   |
| state    | String     |   |   |   |   |   |   |   |   |
| cuisines | String     |   |   |   |   |   |   |   |   |
| pic      | String     |   |   |   |   |   |   |   |   |

| Field   | Type    | Notes                                                                            |   |   |   |   |   |   |   |
|---------|---------|----------------------------------------------------------------------------------|---|---|---|---|---|---|---|
| Type    | string  | Name of comment's writer; defaults to Anonymous if missing.                      |   |   |   |   |   |   |   |
| Notes   | Boolean | Each comment is either a rant (negative) or a rave (positive). Defaults to false |   |   |   |   |   |   |   |
| author  | number  | 1 to 5 star rating in increments of 0.5; required, no default                    |   |   |   |   |   |   |   |
| string  | string  | The written content of the comment; defaults to an empty string.                 |   |   |   |   |   |   |   |
