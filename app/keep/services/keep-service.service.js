import { utilService } from '../../service/utils-service.js';

export const keepService = {
      query,
}

function query() {
      return notes;
}

var notes = [
      {
            id: utilService.makeId(),
            type: "NoteTxt",
            isPinned: true,
            info: {
                  title: "Me playing Mi",
                  txt: "Fullstack Me Baby!"
            },
            style: {
                  backgroundColor: "#f0d"
            }
      },
      {
            id: utilService.makeId(),
            type: "NoteTxt",
            isPinned: false,
            info: {
                  txt: "go to show!"
            },
            style: {
                  backgroundColor: "#00d"
            }
      },
      {
            id: utilService.makeId(),
            type: "NoteImg",
            info: {
                  url: "https://i.picsum.photos/id/402/200/300.jpg?hmac=JmZsqnQgJgxs4tbKwb8Tdu3r-B0tEGN7nrKEb1jBB0Y",
                  title: "Me playing Mi"
            },
            style: {
                  backgroundColor: "#48d"
            }
      },
      {
            id: utilService.makeId(),
            type: "NoteTodos",
            info: {
                  label: "How was it:",
                  todos: [
                        { txt: "Do that", doneAt: null },
                        { txt: "Do this", doneAt: 187111111 }
                  ]
            },
            style: {
                  backgroundColor: "#40d"
            }
      },
      {
            id: utilService.makeId(),
            type: "NoteVideo",
            info: {
                  url: "https://r4---sn-bg07dn6l.googlevideo.com/videoplayback?expire=1614186586&ei=-jM2YNPIEPGomLAP8b-62Aw&ip=131.255.223.3&id=o-AFrhUjxnejtxxa2_oPRRgzNEMJXy_ZMyXncpmhOnrhFx&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=baVUbJ9qF4XNqaH7IvIEEbgF&gir=yes&clen=22363420&ratebypass=yes&dur=358.028&lmt=1581275631108288&fvip=4&fexp=23983797&c=WEB&txp=5531432&n=4Q0ZLTsrtOuPh7Yp&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgDEDwjFqxh2h6nUR1P19sMjGs9IuKNfaH8cR0SfuSsKkCIQDeSkcGaN1pYByW97ohW2la7uUvTg2iImA2D9OmNFgvNw%3D%3D&rm=sn-voq5oxu-wqve7e,sn-pmcg-bg0sel&req_id=51d8bbdd9a3a3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=Jr&mm=30&mn=sn-bg07dn6l&ms=nxu&mt=1614164670&mv=m&mvi=4&pl=24&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAK94HA_IlN-kklARmP0KDBPh9vw-NgtGalwpjXCRg3RJAiEA918B2Q_nKuPj7ZKdIUuqyD-e-5wUQgk3uLKqjxDPZ8E%3D",
                  title: "first video"
            },
            style: {
                  backgroundColor: "#0dd"
            }
      },

]

