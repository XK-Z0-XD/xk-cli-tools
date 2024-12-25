import Conf from "conf";
import { JSONSchema } from "json-schema-typed";

const LIST_SCHEMA: JSONSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    filepath: { type: "string" },
  },
};
const getConfig = () => {
  return new Conf({
    configName: "todo-config",
    schema: {
      lists: { type: "array", items: LIST_SCHEMA },
      "current-list": { type: "string", default: "todo-list" },
      filepath: { type: "string" },
      tasks: {
        type: "array",
        items: {
          type: "object",
          default: [],
          properties: {
            id: { type: "number" },
            text: { type: "string" },
            dateCreated: {
              type: "string",
              format: "date-time",
              default: new Date().toISOString(),
            },
            dateCompleted: { type: ["string", "null"], format: "date-time" },
            dueDate: {},
            status: { type: "string" },
          },
        },
      },
    },
  });
};
export { getConfig };

