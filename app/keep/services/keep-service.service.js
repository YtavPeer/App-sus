export const keepService = {
      query,
}

function query() {
      return notes;
}

var notes = [
      {
            type: "NoteTxt",
            isPinned: true,
            info: {
                  txt: "Fullstack Me Baby!"
            }
      },
      {
            type: "NoteTxt",
            isPinned: false,
            info: {
                  txt: "neet to take dog for a walk!"
            }
      },
      {
            type: "NoteTxt",
            isPinned: true,
            info: {
                  txt: "going to shopping!"
            }
      },
      {
            type: "NoteTxt",
            isPinned: false,
            info: {
                  txt: "go to show!"
            }
      },
]