import { utilService } from '../../service/utils-service.js';
import { storageService } from '../../service/async-storage-service.js';

export const keepService = {
      query,
      getNoteById,
      removeNote,
      editNote,
      addNote,
      getEmptyNoteTxt,
      getEmptyNoteImg,
      getEmptyNoteTodos,
      getEmptyNoteVideo,
}

var notesDB = [
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
                  title: "Me playing Mi",
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
                  title: "Me playing Mi",
                  url: "https://i.picsum.photos/id/402/200/300.jpg?hmac=JmZsqnQgJgxs4tbKwb8Tdu3r-B0tEGN7nrKEb1jBB0Y",
            },
            style: {
                  backgroundColor: "#48d"
            }
      },
      {
            id: utilService.makeId(),
            type: "NoteTodos",
            info: {
                  title: "How was it:",
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
                  title: "first video",
                  url: "https://r4---sn-bg07dn6l.googlevideo.com/videoplayback?expire=1614186586&ei=-jM2YNPIEPGomLAP8b-62Aw&ip=131.255.223.3&id=o-AFrhUjxnejtxxa2_oPRRgzNEMJXy_ZMyXncpmhOnrhFx&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=baVUbJ9qF4XNqaH7IvIEEbgF&gir=yes&clen=22363420&ratebypass=yes&dur=358.028&lmt=1581275631108288&fvip=4&fexp=23983797&c=WEB&txp=5531432&n=4Q0ZLTsrtOuPh7Yp&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgDEDwjFqxh2h6nUR1P19sMjGs9IuKNfaH8cR0SfuSsKkCIQDeSkcGaN1pYByW97ohW2la7uUvTg2iImA2D9OmNFgvNw%3D%3D&rm=sn-voq5oxu-wqve7e,sn-pmcg-bg0sel&req_id=51d8bbdd9a3a3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=Jr&mm=30&mn=sn-bg07dn6l&ms=nxu&mt=1614164670&mv=m&mvi=4&pl=24&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAK94HA_IlN-kklARmP0KDBPh9vw-NgtGalwpjXCRg3RJAiEA918B2Q_nKuPj7ZKdIUuqyD-e-5wUQgk3uLKqjxDPZ8E%3D",
            },
            style: {
                  backgroundColor: "#0dd"
            }
      },

]
const NOTES_KEY = 'keep-storage';
var gNotes = _createNotes();

function query() {
      return storageService.query(NOTES_KEY)
}

function getNoteById(NoteId) {
      return storageService.get(NOTES_KEY, NoteId);
}

function removeNote(noteId) {
      console.log('remove Note in Keep service')
      return storageService.remove(NOTES_KEY, noteId)
}

function editNote(note) {
      return storageService.put(NOTES_KEY, note)
}

function addNote(note) {
      return storageService.post(NOTES_KEY, note)
}

function getEmptyNoteTxt() {
      return {
            id: utilService.makeId(),
            type: "NoteTxt",
            isPinned: false,
            info: {
                  title: null,
                  txt: null
            },
            style: {
                  backgroundColor: 'blue'
            }
      }
}

function getEmptyNoteImg() {
      return {
            id: utilService.makeId(),
            type: "NoteImg",
            info: {
                  title: null,
                  url: null,
            },
            style: {
                  backgroundColor: 'blue'
            }
      }
}

function getEmptyNoteTodos() {
      return {
            id: utilService.makeId(),
            type: "NoteTodos",
            info: {
                  title: null,
                  todos: [
                        { txt: null, doneAt: null },
                        { txt: null, doneAt: null }
                  ]
            },
            style: {
                  backgroundColor: 'blue'
            }
      }
}

function getEmptyNoteVideo() {
      return {
            id: utilService.makeId(),
            type: "NoteVideo",
            info: {
                  title: null,
                  url: null,
            },
            style: {
                  backgroundColor: 'blue'
            }
      }
}

function _createNotes() {
      let notes = utilService.loadFromStorage(NOTES_KEY)
      if (!notes || !notes.length) {
            notes = notesDB;
            utilService.saveToStorage(NOTES_KEY, notes)
      }
      return notes;
}



//photo urls:

// https://i.picsum.photos/id/666/200/300.jpg?hmac=FfmCCw-UuMgMhTLigoNVx2auMxtw-EtixqVwwxaefq0
// https://i.picsum.photos/id/1084/200/300.jpg?hmac=JQMQbKvpN6_d6r-fiuOEYe1Dz6f2gfGIkTvsx0nLJUQ
// https://i.picsum.photos/id/676/200/300.jpg?hmac=LsUQsWIg599NTNNwcLwXKvaE31ysfQLKYsYFrw_O9o8


// video url:
// https://r8---sn-nhpax-ua8d.googlevideo.com/videoplayback?expire=1614203653&ei=pXY2YI6WNJOw1wL4lq2QBw&ip=212.40.116.55&id=o-AE3e1CKrzLI7tfhqaGajb074ILgjX1_yCnwGkQb9Y9oQ&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=AZySMz124LxTAL3I4alId24F&gir=yes&clen=81159721&ratebypass=yes&dur=3752.716&lmt=1552298886602235&fvip=1&fexp=23983797&c=WEB&txp=5531432&n=ZKP8M7BwW4iDjRj2&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgMpNFAGKDH-Ps-R6L19F8tv8GlHlA_QzI3qOsQakhZNsCIQCpJWcil6tamP8pBUMiYzBM1w5E3xccLuC_wapykwq_OQ==&title=%D7%90%D7%A8%D7%99%D7%A7+%D7%A9%D7%9C%D7%99+-+%D7%90%D7%95%D7%A1%D7%A3+%D7%A9%D7%99%D7%A8%D7%99+%D7%90%D7%A8%D7%99%D7%A7+%D7%90%D7%99%D7%99%D7%A0%D7%A9%D7%98%D7%99%D7%99%D7%9F++1%D7%9E%D7%AA%D7%95%D7%9A+5&cms_redirect=yes&mh=ok&mip=176.230.24.89&mm=31&mn=sn-nhpax-ua8d&ms=au&mt=1614181728&mv=m&mvi=8&pcm2cms=yes&pl=16&lsparams=mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRAIgI9OkHfM0rYrofro4RL86P8fC7qtzacQICxVkAK4oeHkCIFcfTxvAEi8Zd89lFfPP5nPTy5jand3PojBNTKEXCoBH
// https://r1---sn-bg07dnzs.googlevideo.com/videoplayback?expire=1614186965&ei=dTU2YNC-MpST1wLyw7vICQ&ip=177.125.162.111&id=o-AIxxRfjCuuXnAd8Xa-jK4myFpJQEI-bUV236LGRTk4vM&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=9ZYWAQUXBjTGaCk0UdTQ-DQF&gir=yes&clen=41278575&ratebypass=yes&dur=601.768&lmt=1587605598462054&fvip=7&fexp=23983797&c=WEB&txp=5531432&n=p24R_vhVXNzgjtbv&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgX93zXg_PPl35LozO1NivN2xZVSPnxirKWRCa6DJT9A4CIHXJeiuSo3-mGR9Vm0_628NAuDV8yEYwFNfMi4t5HRL3&rm=sn-42cg-ja8e7e,sn-pmcg-bg067k&req_id=49a4877373eda3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=Mx&mm=30&mn=sn-bg07dnzs&ms=nxu&mt=1614181460&mv=m&mvi=1&pl=24&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgDLGJt6nelHfkoC2DofX9v-KXnVQCzwpNYIlMYI1KwagCIAJyrATxDKVJLouhukuIdqG9zqgICpAsCNqdt7ZYK8XA