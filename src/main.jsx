import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const letters = [
["When you're sad","Take a deep breath, Panda. You don't have to be okay every second. I'm right here, cheering for you and reminding you how loved you are. This moment will pass, and you never have to face it alone. ❤️"],
["When you miss me","I wish I could teleport to you right now, give you the longest hug, and refuse to let go. Until then, imagine me stealing one more minute of your time. 🫂"],
["When you're angry","You're allowed to feel everything. Take your time, breathe, and know that I'll listen when you're ready. No judgement, just us. ❤️"],
["When you need a laugh","Official reminder: you are cute, slightly dramatic, occasionally impossible, and still my favourite human. This certificate cannot be returned or exchanged. 😂"],
["When you need motivation","You are capable of more than you think. One small step is still progress. I believe in you, even on the days when you find it difficult to believe in yourself. 🌷"],
["When you need love","You are precious, beautiful, important, and deeply loved. Not because of what you do, but simply because you're you. ❤️"]
];
const reasons = ["Your smile can turn an ordinary day into my favourite day.","The way you care, even about the smallest things.","Your laugh — especially when you laugh at your own jokes.","You make even boring moments feel special.","Your strength, kindness, and beautiful heart.","Because being your person is my favourite feeling."];
const quiz = [
{q:"What nickname do I lovingly use for you?",a:["PANDA 🐼","Sunshine ☀️","Princess 👑"],c:0},
{q:"When does our birthday date begin?",a:["1:00 PM","3:00 PM","6:00 PM"],c:1},
{q:"Where are we going for lunch on our date?",a:["Chili's 🍽️","A pizza place 🍕","A coffee shop ☕"],c:0},
{q:"What is the best part of our date?",a:["The food","The pictures","Spending time together ❤️"],c:2},
{q:"Who deserves all the birthday pampering?",a:["PANDA","PANDA, obviously 😂","Still PANDA 🐼"],c:1},
{q:"What should we collect more of together?",a:["Beautiful memories","Silly selfies","Both of these 💗"],c:2},
{q:"What's my favourite kind of message from you?",a:["A random good morning","A cute I miss you","Anything from you ❤️"],c:2},
{q:"If we had a free day together, what would I choose?",a:["A little adventure","A cosy day together","Anything, as long as we're together"],c:2},
{q:"What should never be missing from our relationship?",a:["Laughter","Honesty","Love and all of the above"],c:2},
{q:"Who is the birthday star today?",a:["Me","PANDA 🌷","The cake 🎂"],c:1},
{q:"What's better than a perfect plan?",a:["A spontaneous moment together","A long shopping list","A cancelled plan"],c:0},
{q:"What should we do after lunch if we feel like it?",a:["Take cute pictures","Go for a little walk","Whatever makes us happy"],c:2},
{q:"What's my favourite view?",a:["A sunset","A beautiful place","Your smile 😊"],c:2},
{q:"What do I wish for your new year?",a:["More happiness","More success","All the happiness you deserve 💞"],c:2},
{q:"And finally, how much are you loved?",a:["A little","A lot","More than words can explain ❤️"],c:2}
];

const birthdayPhotos = [
  {id:"birthday-1",url:import.meta.env.BASE_URL+"photos/memory-01.webp",name:"The smile I adore 🌷"},
  {id:"birthday-2",url:import.meta.env.BASE_URL+"photos/memory-02.webp",name:"My pretty Panda 🐼"},
  {id:"birthday-3",url:import.meta.env.BASE_URL+"photos/memory-03.webp",name:"Just being you 💗"},
  {id:"birthday-4",url:import.meta.env.BASE_URL+"photos/memory-04.webp",name:"Little moments, big smiles"},
  {id:"birthday-5",url:import.meta.env.BASE_URL+"photos/memory-05.webp",name:"Birthday girl energy ✨"},
  {id:"birthday-6",url:import.meta.env.BASE_URL+"photos/memory-06.webp",name:"Us, and a little magic"},
  {id:"birthday-7",url:import.meta.env.BASE_URL+"photos/memory-07.webp",name:"My favourite company"},
  {id:"birthday-8",url:import.meta.env.BASE_URL+"photos/memory-08.webp",name:"A memory worth keeping"},
  {id:"birthday-9",url:import.meta.env.BASE_URL+"photos/memory-09.webp",name:"Cutest kind of together"},
  {id:"birthday-10",url:import.meta.env.BASE_URL+"photos/memory-10.webp",name:"All the heart eyes 💕"},
  {id:"birthday-11",url:import.meta.env.BASE_URL+"photos/memory-11.webp",name:"Our happy place"},
  {id:"birthday-12",url:import.meta.env.BASE_URL+"photos/memory-12.webp",name:"A little closer, always"},
  {id:"birthday-13",url:import.meta.env.BASE_URL+"photos/memory-13.webp",name:"You + me = ❤️"},
  {id:"birthday-14",url:import.meta.env.BASE_URL+"photos/memory-14.webp",name:"One more lovely memory"},
  {id:"birthday-15",url:import.meta.env.BASE_URL+"photos/memory-15.webp",name:"Every moment counts"},
  {id:"birthday-16",url:import.meta.env.BASE_URL+"photos/memory-16.webp",name:"Even miles can’t stop a smile"}
,
  {id:"birthday-17",url:import.meta.env.BASE_URL+"photos/memory-17.webp",name:"A moment to treasure 💗"},
  {id:"birthday-18",url:import.meta.env.BASE_URL+"photos/memory-18.webp",name:"My favourite kind of magic 💗"},
  {id:"birthday-19",url:import.meta.env.BASE_URL+"photos/memory-19.webp",name:"A little piece of our story 💗"},
  {id:"birthday-20",url:import.meta.env.BASE_URL+"photos/memory-20.webp",name:"Another reason to smile 💗"},
  {id:"birthday-21",url:import.meta.env.BASE_URL+"photos/memory-21.webp",name:"The sweetest memories 💗"},
  {id:"birthday-22",url:import.meta.env.BASE_URL+"photos/memory-22.webp",name:"The days I want to remember 💗"},
  {id:"birthday-23",url:import.meta.env.BASE_URL+"photos/memory-23.webp",name:"Always worth a thousand words 💗"},
  {id:"birthday-24",url:import.meta.env.BASE_URL+"photos/memory-24.webp",name:"Little moments, endless love 💗"},
  {id:"birthday-25",url:import.meta.env.BASE_URL+"photos/memory-25.webp",name:"A moment to treasure 💗"},
  {id:"birthday-26",url:import.meta.env.BASE_URL+"photos/memory-26.webp",name:"My favourite kind of magic 💗"},
  {id:"birthday-27",url:import.meta.env.BASE_URL+"photos/memory-27.webp",name:"A little piece of our story 💗"},
  {id:"birthday-28",url:import.meta.env.BASE_URL+"photos/memory-28.webp",name:"Another reason to smile 💗"},
  {id:"birthday-29",url:import.meta.env.BASE_URL+"photos/memory-29.webp",name:"The sweetest memories 💗"},
  {id:"birthday-30",url:import.meta.env.BASE_URL+"photos/memory-30.webp",name:"The days I want to remember 💗"},
  {id:"birthday-31",url:import.meta.env.BASE_URL+"photos/memory-31.webp",name:"Always worth a thousand words 💗"},
  {id:"birthday-32",url:import.meta.env.BASE_URL+"photos/memory-32.webp",name:"Little moments, endless love 💗"},
  {id:"birthday-33",url:import.meta.env.BASE_URL+"photos/memory-33.webp",name:"A moment to treasure 💗"},
  {id:"birthday-34",url:import.meta.env.BASE_URL+"photos/memory-34.webp",name:"My favourite kind of magic 💗"},
  {id:"birthday-35",url:import.meta.env.BASE_URL+"photos/memory-35.webp",name:"A little piece of our story 💗"},
  {id:"birthday-36",url:import.meta.env.BASE_URL+"photos/memory-36.webp",name:"Another reason to smile 💗"},
  {id:"birthday-37",url:import.meta.env.BASE_URL+"photos/memory-37.webp",name:"The sweetest memories 💗"},
  {id:"birthday-38",url:import.meta.env.BASE_URL+"photos/memory-38.webp",name:"The days I want to remember 💗"},
  {id:"birthday-39",url:import.meta.env.BASE_URL+"photos/memory-39.webp",name:"Always worth a thousand words 💗"},
  {id:"birthday-40",url:import.meta.env.BASE_URL+"photos/memory-40.webp",name:"Little moments, endless love 💗"},
  {id:"birthday-41",url:import.meta.env.BASE_URL+"photos/memory-41.webp",name:"A moment to treasure 💗"},
  {id:"birthday-42",url:import.meta.env.BASE_URL+"photos/memory-42.webp",name:"My favourite kind of magic 💗"},
  {id:"birthday-43",url:import.meta.env.BASE_URL+"photos/memory-43.webp",name:"A little piece of our story 💗"},
  {id:"birthday-44",url:import.meta.env.BASE_URL+"photos/memory-44.webp",name:"Another reason to smile 💗"},
  {id:"birthday-45",url:import.meta.env.BASE_URL+"photos/memory-45.webp",name:"The sweetest memories 💗"},
  {id:"birthday-46",url:import.meta.env.BASE_URL+"photos/memory-46.webp",name:"The days I want to remember 💗"},
  {id:"birthday-47",url:import.meta.env.BASE_URL+"photos/memory-47.webp",name:"Always worth a thousand words 💗"},
  {id:"birthday-48",url:import.meta.env.BASE_URL+"photos/memory-48.webp",name:"Little moments, endless love 💗"},
  {id:"birthday-49",url:import.meta.env.BASE_URL+"photos/memory-49.webp",name:"A moment to treasure 💗"},
  {id:"birthday-50",url:import.meta.env.BASE_URL+"photos/memory-50.webp",name:"My favourite kind of magic 💗"},
  {id:"birthday-51",url:import.meta.env.BASE_URL+"photos/memory-51.webp",name:"A little piece of our story 💗"},
  {id:"birthday-52",url:import.meta.env.BASE_URL+"photos/memory-52.webp",name:"Another reason to smile 💗"},
  {id:"birthday-53",url:import.meta.env.BASE_URL+"photos/memory-53.webp",name:"The sweetest memories 💗"},
  {id:"birthday-54",url:import.meta.env.BASE_URL+"photos/memory-54.webp",name:"The days I want to remember 💗"},
  {id:"birthday-55",url:import.meta.env.BASE_URL+"photos/memory-55.webp",name:"Always worth a thousand words 💗"},
  {id:"birthday-56",url:import.meta.env.BASE_URL+"photos/memory-56.webp",name:"Little moments, endless love 💗"},
  {id:"birthday-57",url:import.meta.env.BASE_URL+"photos/memory-57.webp",name:"A moment to treasure 💗"}
];

function App(){
 const [letter,setLetter]=useState(null),[dateOpen,setDateOpen]=useState(false),[answer,setAnswer]=useState(""),[celebrate,setCelebrate]=useState(false),[giftOpen,setGiftOpen]=useState(false),[birthdayLetter,setBirthdayLetter]=useState(false);
 const [candlesOut,setCandlesOut]=useState(false),[answers,setAnswers]=useState({}),[quizDone,setQuizDone]=useState(false);
 const [photos,setPhotos]=useState(birthdayPhotos),[captions,setCaptions]=useState({}),[music,setMusic]=useState(import.meta.env.BASE_URL+"music/our-little-melody.wav"),[musicName,setMusicName]=useState("Our Little Melody — made just for Panda 💗");
 const addPhotos=async files=>{const chosen=Array.from(files||[]);const valid=chosen.filter(f=>["image/jpeg","image/png","image/webp"].includes(f.type));if(valid.length!==chosen.length)alert("For the best compatibility, please choose JPG, PNG or WEBP photos. HEIC photos from some phones may need converting first.");const read= f=>new Promise(resolve=>{const reader=new FileReader();reader.onload=()=>resolve({id:Date.now()+"-"+Math.random().toString(16).slice(2),url:reader.result,name:f.name});reader.readAsDataURL(f);});const items=await Promise.all(valid.map(read));setPhotos(old=>[...old,...items]);};
 const handlePhotoInput=e=>{addPhotos(e.target.files);e.target.value="";};
 const handlePhotoDrop=e=>{e.preventDefault();addPhotos(e.dataTransfer.files);};
 const score=quiz.reduce((n,q,i)=>n+(Number(answers[i])===q.c?1:0),0);
 return <div className="app">
 <header><a href="#home">♡ A little world for PANDA</a><nav><a href="#memories">Memories</a><a href="#letters">Letters</a><a href="#cake">Make a wish</a></nav></header>
 <main>
 <section className="hero" id="home"><div className="spark">✦ ✧ ✦</div><p className="eyebrow">A VERY SPECIAL DAY FOR A VERY SPECIAL GIRL</p><h1>Happy Birthday,<br/><span>Aditi</span> <i>(PANDA)</i>! 🎀</h1><p className="intro">Today is all about you — your smile, your dreams, your happiness, and all the little things that make you wonderfully YOU.</p><a className="btn" href="#memories">Let's celebrate ↓</a><p className="tiny">Made with an unreasonable amount of love ♡</p><b className="heart one">♥</b><b className="heart two">♡</b></section>
 <section className="section gift-section"><p className="eyebrow">A PRESENT JUST FOR YOU</p><h2>Your birthday gift is waiting 🎁</h2><p className="lead">Every great birthday starts with a little surprise. Tap the gift to open it.</p><button className={"gift-box "+(giftOpen?"opened":"")} onClick={()=>setGiftOpen(!giftOpen)} aria-label="Open birthday gift"><span className="gift-lid">🎀</span><span className="gift-body">{giftOpen?"💖":"🎁"}</span></button>{giftOpen&&<p className="gift-message">Surprise, PANDA! Your gift is a whole page full of love, memories, and reasons to smile. ❤️</p>}</section>
 <section className="section"><p className="eyebrow">A NOTE BEFORE YOU EXPLORE</p><h2>For my favourite human</h2><p>Another year of you being amazing. I hope this little corner of the internet makes you smile as much as you make me smile. Explore everything — there are tiny surprises waiting for you. 💗</p></section>
 <section className="section" id="memories"><p className="eyebrow">CHAPTERS OF US</p><h2>Our Memory Lane 🛤️</h2><p className="lead">Every little moment is a page in my favourite story.</p><div className="timeline">
 {["The beginning ✨|The day our story started becoming something special. A beginning I'll always be grateful for.","Our silly moments 😂|Inside jokes, random conversations, teasing, laughter — the little things that became our thing.","Growing together 🌷|Learning, understanding, supporting, and choosing each other through every kind of day.","So many more to come 💞|This is nowhere near the last chapter. I can't wait for all the memories still waiting for us."].map((s,i)=><div className="timeline-item" key={s}><b>0{i+1}</b><div><h3>{s.split("|")[0]}</h3><p>{s.split("|")[1]}</p></div></div>)}
 </div><div className="upload" onDragOver={e=>e.preventDefault()} onDrop={handlePhotoDrop}><h3>📸 Our little photo gallery</h3><p>Our favourite memories, already here for you. 💗 You can also add more photos below.</p><label className="btn light">＋ Choose photos<input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={handlePhotoInput}/></label><p className="photo-tip">A little scrapbook of us, with more memories still to make. 🐼💕</p>{photos.length>0&&<p className="photo-count">{photos.length} lovely {photos.length===1?"memory":"memories"} added 💗</p>}{photos.length>0&&<div className="photos">{photos.map(p=><div className="polaroid" key={p.id}><img src={p.url} alt={p.name}/><input value={captions[p.id]??p.name.replace(/\.[^.]+$/,"")} onChange={e=>setCaptions({...captions,[p.id]:e.target.value})}/><button onClick={()=>setPhotos(old=>old.filter(x=>x.id!==p.id))}>Remove</button></div>)}</div>}</div></section>
 <section className="section pink" id="letters"><p className="eyebrow">OPEN WHEN YOU NEED IT</p><h2>Little letters for you 💌</h2><p className="lead">Choose one. It's written for that exact kind of day.</p><div className="grid letters">{letters.map(l=><button className="letter" key={l[0]} onClick={()=>setLetter(l)}><span>💌</span><strong>{l[0]}</strong><small>Tap to open ↗</small></button>)}</div></section>
 <section className="section"><p className="eyebrow">A FEW OF A MILLION</p><h2>Reasons you're my favourite ❤️</h2><div className="grid reasons">{reasons.map((r,i)=><div className="reason" key={r}><b>0{i+1}</b><p>{r}</p></div>)}</div></section>
 <section className="section pink"><p className="eyebrow">THE OFFICIAL DOCUMENT</p><h2>Girlfriend Terms & Conditions 📜</h2><div className="terms"><p>By being the cutest PANDA ever, you agree that:</p><ol><li>Hugs may be requested at any time and are highly encouraged.</li><li>You are entitled to unlimited compliments and forehead kisses.</li><li>Stealing my food is allowed, but sharing yours is also appreciated.</li><li>You must keep smiling — but on difficult days, I'll help you find a reason.</li><li>You are permanently my favourite person. No cancellation policy applies.</li></ol><b>Signed with love, your biggest fan. ❤️</b></div></section>
 <section className="section panda"><div className="panda-emoji">🐼</div><p className="eyebrow">THE PANDA ZONE</p><h2>Certified cutie. Officially loved.</h2><p>Warning: excessive cuteness may cause spontaneous smiling, random hugs, and a severe case of missing you.</p></section>
 <section className="section" id="quiz"><p className="eyebrow">A LITTLE TEST</p><h2>How well do you know us? 💑</h2><p className="lead">No pressure. But I am absolutely keeping score. 😂</p><div className="quiz"><p className="quiz-progress">15 little questions, just for fun 💗</p>{quiz.map((q,i)=><div className="q" key={q.q}><h3>{i+1}. {q.q}</h3><div className="options">{q.a.map((a,j)=><button className={answers[i]===String(j)?"chosen":""} key={a} onClick={()=>{setAnswers({...answers,[i]:String(j)});setQuizDone(false)}}>{a}</button>)}</div></div>)}<button className="btn" disabled={Object.keys(answers).length!==quiz.length} onClick={()=>setQuizDone(true)}>Finish our little quiz 💞</button>{quizDone&&<p className="result">You answered all 15! Every answer is a little memory in the making. You're still my favourite person. ❤️</p>}</div></section>
 <section className="section cake-section" id="cake"><p className="eyebrow">MAKE A WISH</p><h2>Your birthday cake 🎂</h2><p className="lead">Close your eyes, make a wish, and tap the candles.</p><div className="cake"><div className="candles">{[1,2,3].map(n=><span className="candle" key={n}>{!candlesOut&&<i/>}</span>)}</div><div className="cake-top"></div><div className="cake-body">♡</div><div className="plate"></div></div><button className="btn" onClick={()=>setCandlesOut(!candlesOut)}>{candlesOut?"Light the candles again ✨":"Blow out the candles 🌬️"}</button>{candlesOut&&<p className="result">Wish sent to the universe. May this year be as beautiful as you. 💫</p>}</section>
 <section className="section pink"><p className="eyebrow">A LITTLE BACKGROUND MAGIC</p><h2>Our song 🎵</h2><p className="lead">A gentle little melody made just for you. Tap play to listen while you explore — or choose another song of your own.</p><label className="btn light">Change the song<input type="file" accept="audio/*" onChange={e=>{const f=e.target.files?.[0];if(f){if(music.startsWith("blob:"))URL.revokeObjectURL(music);setMusic(URL.createObjectURL(f));setMusicName(f.name)}}}/></label>{music&&<div className="music"><p>🎶 {musicName}</p><audio controls loop preload="metadata" src={music}/></div>}</section>
 <section className="section birthday-letter-section"><p className="eyebrow">FROM MY HEART</p><h2>A birthday letter for you 💗</h2><p>On your special day, I just want you to know how grateful I am that you are in my life. I hope this year brings you peace when you need it, courage when things feel difficult, laughter in the ordinary moments, and beautiful surprises when you least expect them. Keep dreaming big, keep being your wonderfully silly self, and never forget how special you are to me. Happy Birthday, Aditi. I hope I get to celebrate countless more with you. ❤️</p><button className="btn light" onClick={()=>setBirthdayLetter(!birthdayLetter)}>{birthdayLetter?"Close letter":"Read this again ♡"}</button>{birthdayLetter&&<p className="letter-signoff">All my love, always. ♡</p>}</section>
 <section className="section final"><p className="eyebrow">ONE LAST THING...</p><h2>There's more to this little surprise.</h2><p>I saved one tiny letter for the very end. Open it when you're ready. 💗</p><button className="btn" onClick={()=>setDateOpen(true)}>Open your final letter 💌</button></section>
 </main><footer>Made for Aditi (PANDA), with all my love. <span>♡</span></footer>
 {letter&&<div className="overlay" onClick={()=>setLetter(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setLetter(null)}>×</button><div className="big">💌</div><p className="eyebrow">A LETTER FOR YOU</p><h2>{letter[0]}</h2><p>{letter[1]}</p><button className="btn" onClick={()=>setLetter(null)}>Sending you a hug ♡</button></div></div>}
 {dateOpen&&<div className="overlay" onClick={()=>setDateOpen(false)}><div className="modal date-modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setDateOpen(false)}>×</button><div className="big">🌷</div><p className="eyebrow">A LITTLE LETTER, FROM ME TO YOU</p><h2>My dearest PANDA,</h2><p className="love-letter">If I could ask for one more beautiful memory with you, it would be a day where the only plan is to see you smile. We can dress up or keep it simple, eat something yummy, talk about everything and nothing, take silly pictures, and make the kind of memory we'll look back on and smile about.</p><p className="question">So, birthday girl… will you go on a date with me on your birthday? 🥺👉👈</p>{answer?<><div className="answer">{answer==="yes"?"YAYYYYY! It's a date! ❤️🥹 I can't wait to make your birthday extra special!":"That's okay, birthday girl. No pressure — you deserve all the time you need. ❤️"}</div>{answer==="yes"&&<div className="date-schedule"><p className="eyebrow">OUR LITTLE PLAN</p><h3>Our Birthday Date ❤️</h3><div className="schedule-row"><span>🕒</span><div><b>3:00 PM</b><small>Our date begins!</small></div></div><div className="schedule-row"><span>🍽️</span><div><b>Lunch at Chili's</b><small>Good food, lovely conversations and time together.</small></div></div><p className="schedule-note">Just us, good food & beautiful memories. 🥰</p></div>}</>:<div className="actions"><button className="btn" onClick={()=>{setAnswer("yes");setCelebrate(true)}}>YESSS! ❤️</button><button className="btn light" onClick={()=>setAnswer("maybe")}>Let me think 🙈</button></div>}<p className="signature">Forever your biggest fan,<br/>someone who adores you ♡</p></div></div>}
 {celebrate&&<div className="celebrate" onClick={()=>setCelebrate(false)}><div className="celebrate-card"><div>💖 🎉 💖</div><h2>IT'S A DATE!!!</h2><p>One birthday date, unlimited smiles, and a whole lot of love. Tap anywhere to close.</p><div>🌸 🧸 🌸</div></div></div>}
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
