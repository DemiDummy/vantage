(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={C:0,D:2,E:4,F:5,G:7,A:9,B:11},t={X:1,x:.85,o:.5};function n(t){let n=/^([A-Ga-g])([#b]?)(-?\d)$/.exec(t.trim());if(!n)throw Error(`bad note name "${t}"`);let r=e[n[1].toUpperCase()]??0,i=n[2]===`#`?1:n[2]===`b`?-1:0;return 12*(parseInt(n[3],10)+1)+r+i}function r(e,t=.8,r=4){let i=[],a=0;for(let o of e.split(/\s+/)){if(o===``)continue;if(o===`|`){if(Math.abs(a/r-Math.round(a/r))>1e-6)throw Error(`bar line at beat ${a} is not on a bar boundary`);continue}let e=/^(r|\[[^\]]+\]|[A-Ga-g][#b]?-?\d)(?::([\d.]+))?(?:@([\d.]+))?$/.exec(o);if(!e)throw Error(`bad token "${o}"`);let s=e[2]===void 0?1:parseFloat(e[2]),c=e[3]===void 0?t:parseFloat(e[3]),l=e[1];if(l!==`r`){let e=l.startsWith(`[`)?l.slice(1,-1).split(`,`):[l];for(let t of e)i.push({t:a,midi:n(t),dur:s,vel:c})}a+=s}return{notes:i,len:a}}function i(e,n,r=.25){let i=[],a=0;for(let o of e){if(o===` `||o===`|`||o===`
`)continue;let e=t[o];if(e!==void 0)i.push({t:a,midi:n,dur:r,vel:e});else if(o!==`.`)throw Error(`bad drum step "${o}"`);a+=r}return{notes:i,len:a}}function a(e,t,r,i){let a=[],o=0;return e.forEach((e,s)=>{let c=e.split(/\s+/).map(n),l=t[s%t.length];for(let e of l)e>=0&&a.push({t:o,midi:c[e%c.length],dur:r,vel:i}),o+=r}),{notes:a,len:o}}function o(e,t){return Array.from({length:t},()=>e).join(` | `)}function s(e,t,n){let r=[...t.notes].sort((e,t)=>e.t-t.t||e.midi-t.midi);return n===void 0?{inst:e,notes:r,len:t.len}:{inst:e,notes:r,len:t.len,gain:n}}var c=[`G`,`Em`,`C`,`D`,`G`,`Em`,`C`,`D`,`Em`,`Bm`,`C`,`G`,`Am`,`Em`,`C`,`D`],l={G:`G3 B3 D4 G4`,Em:`E3 G3 B3 E4`,C:`C3 E3 G3 C4`,D:`D3 F#3 A3 D4`,Bm:`B2 D3 F#3 B3`,Am:`A2 C3 E3 A3`},u={G:`[G3,B3,D4]`,Em:`[G3,B3,E4]`,C:`[G3,C4,E4]`,D:`[F#3,A3,D4]`,Bm:`[F#3,B3,D4]`,Am:`[A3,C4,E4]`},d={G:`G2`,Em:`E2`,C:`C2`,D:`D2`,Bm:`B2`,Am:`A2`},f={bpm:80,beatsPerBar:4,bars:16,loop:!0,level:.67,tracks:[s(`harp`,a(c.map(e=>l[e]),[[0,2,1,3,2,3,1,2],[0,2,1,3,2,3,1,2],[0,2,1,3,2,3,1,2],[0,1,2,3,2,1,0,1]],.5,.7)),s(`harp`,a(c.map(e=>d[e]),[[0,-1,-1,-1,-1,-1,-1,-1]],.5,.75)),s(`pad`,r(c.map(e=>`${u[e]}:4`).join(` | `),.5)),s(`flute`,r(`r:4 | r:4 | r:4 | r:4 | r:2 D5:1 B4:1 | G4:2 B4:2 | C5:1.5 B4:0.5 A4:2 | F#4:3 r:1 | E5:1.5 D5:0.5 B4:2 | D5:1 B4:1 F#5:2 | E5:1.5 D5:0.5 C5:1 B4:1 | D5:3 r:1 | C5:1 E5:1 A5:1.5 G5:0.5 | E5:2 B4:1 G4:1 | A4:1 B4:1 C5:1 E5:1 | D5:2.5 r:1.5`,.7)),s(`hand`,i(o(`................`,4)+` | `+o(`x..o..x.o...x.o.`,12),60),.7)]},p=`Dm.Dm.Bb.C.Dm.Dm.Gm.A.Dm.Dm.Bb.C.Gm.A.Dm.Dm.F.C.Gm.Dm.Bb.F.Gm.A.F.C.Gm.Dm.Bb.Gm.A.A`.split(`.`),m={Dm:`D2 A2 D3 C3`,Bb:`Bb1 F2 Bb2 A2`,C:`C2 G2 C3 Bb2`,Gm:`G2 D3 G3 F3`,A:`A2 E3 A3 G3`,F:`F2 C3 F3 E3`},h={Dm:`[D4,F4,A4]`,Bb:`[D4,F4,Bb4]`,C:`[C4,E4,G4]`,Gm:`[D4,G4,Bb4]`,A:`[C#4,E4,A4]`,F:`[C4,F4,A4]`},g={Dm:`D2`,Bb:`Bb1`,C:`C2`,Gm:`G2`,A:`A1`,F:`F2`},_=`D5:1.5 F5:0.5 A5:1 G5:0.5 F5:0.5,E5:1 D5:1 A4:2,Bb4:1.5 D5:0.5 F5:1 E5:1,C5:2 r:1 A4:0.5 C5:0.5,D5:1.5 F5:0.5 A5:1 Bb5:1,A5:1 F5:1 D5:2,G5:1.5 Bb5:0.5 D6:1 C6:1,A5:2 r:1 C#5:0.5 E5:0.5,F5:1 E5:0.5 D5:0.5 A5:2,D6:1.5 C6:0.5 A5:1 F5:1,Bb5:1 A5:1 G5:1 F5:1,E5:1.5 G5:0.5 C6:2,Bb5:1.5 A5:0.5 G5:1 D5:1,E5:1 C#5:1 E5:1 G5:1,A5:1.5 F5:0.5 D5:1 E5:1,D5:3 r:1,F5:1.5 A5:0.5 C6:1 A5:1,G5:1.5 E5:0.5 C5:2,D5:1 G5:1 Bb5:1.5 A5:0.5,A5:1 F5:1 D5:2,F5:1.5 D5:0.5 Bb5:2,A5:1 C6:1 A5:1 F5:1,G5:1.5 A5:0.5 Bb5:1 D6:1,C#6:2 A5:1 E5:1,F5:1 A5:1 C6:1.5 D6:0.5,E6:1 C6:1 G5:2,Bb5:1.5 A5:0.5 G5:1 F5:1,E5:1 F5:1 A5:2,Bb5:1 A5:1 F5:1 D5:1,G5:1.5 Bb5:0.5 D6:2,C#6:1 E6:1 A5:1 G5:1,E5:1 F5:0.5 E5:0.5 C#5:1 r:1`.split(`,`).join(` | `),v=`r:4.r:2 F4:1 E4:1.D4:2 F4:2.E4:1 G4:1 E4:1 C4:1.r:4.r:2 A4:1 Bb4:1.Bb4:2 G4:2.A4:1 G4:1 E4:1 C#4:1.r:4.r:2 F4:1 E4:1.D4:2 F4:2.G4:2 E4:2.D4:2 Bb3:2.A3:1 C#4:1 E4:1 G4:1.F4:1 D4:1 A3:1 F4:1.D4:2 E4:1 C#4:1.F4:1 A4:1 C5:1 A4:1.E4:1 G4:1 C5:1 G4:1.D4:1 G4:1 Bb4:1 G4:1.F4:1 A4:1 D5:1 A4:1.D4:1 F4:1 Bb4:1 F4:1.C4:1 F4:1 A4:1 F4:1.D4:1 G4:1 Bb4:1 G4:1.E4:1 A4:1 C#5:1 A4:1.A4:1 C5:1 F5:1 C5:1.G4:1 C5:1 E5:1 C5:1.G4:1 Bb4:1 D5:1 Bb4:1.F4:1 A4:1 D5:1 A4:1.F4:1 Bb4:1 D5:1 Bb4:1.G4:1 Bb4:1 D5:1 Bb4:1.A4:1 C#5:1 E5:1 C#5:1.A4:2 C#5:1 E5:1`.split(`.`).join(` | `),y=o(`....x.......x.o. | ....x...o.o.x.xx`,16),b=o(`x.......x.....x.`,32),x=o(`................`,15)+` | x.x.x.x.xxxxxxxx | `+o(`................`,15)+` | x.x.x.x.xxxxxxxx`,S={bpm:120,beatsPerBar:4,bars:32,loop:!0,level:.41,tracks:[s(`bass`,a(p.map(e=>m[e]),[[0,0,1,0,2,0,1,3],[0,0,1,0,2,0,1,3],[0,0,1,0,2,0,1,3],[0,1,2,1,0,1,3,1]],.5,.85)),s(`strings`,r(p.map(e=>`${h[e]}:4`).join(` | `),.5)),s(`brass`,r(_,.85)),s(`pulse`,r(v,.6)),s(`timp`,a(p.map(e=>g[e]),[[0,-1,-1,-1,0,-1,-1,-1]],.5,.8)),s(`timp`,i(x,38),.6),s(`kick`,i(b,36)),s(`snare`,i(y,38))]},C=`D4:1 r:1 F4:0.5 E4:0.5 r:1 | r:4 | D4:1 r:1 Eb4:1 D4:1 | r:4 | Bb3:1 r:1 D4:0.5 C4:0.5 r:1 | r:4 | Bb3:1 r:1 A3:1 Bb3:1 | r:4 | D4:1 r:1 F4:0.5 E4:0.5 r:1 | r:2 A4:1 G4:1 | F4:1 r:1 Eb4:1 D4:1 | r:4 | A3:1 r:1 C#4:0.5 E4:0.5 r:1 | r:4 | A3:1 r:1 Bb3:1 A3:1 | r:4`,w=o(`................`,3)+` | ..............o. | `+o(`................`,7)+` | ..............o. | `+o(`................`,4),T=o(`................`,7)+` | x............... | `+o(`................`,7)+` | x...............`,E={muster:f,battle:S,tense:{bpm:120,beatsPerBar:4,bars:16,loop:!0,level:.8,tracks:[s(`pad`,r(`[D2,A2]:16 [Bb2,F3]:16 [D2,A2]:16 [A2,E3,C#4]:16`,.6)),s(`kick`,i(o(`x..o............`,16),36),.8),s(`harp`,r(C,.65)),s(`strings`,r(`r:24 Eb5:8@0.35 r:24 E5:8@0.35`,.35)),s(`snare`,i(w,38)),s(`timp`,i(T,38))]},victory:{bpm:132,beatsPerBar:4,bars:3,loop:!1,level:.37,tracks:[s(`brass`,r(`A4:0.5 A4:0.5 A4:0.5 D5:2.5 | F#5:0.5 G5:0.5 A5:1 B5:0.5 A5:0.5 D6:1 | [D5,F#5,A5,D6]:4`,.9)),s(`brass`,r(`r:1.5 [D4,F#4,A4]:2.5 | [G4,B4,D5]:2 [A4,C#5,E5]:2 | [D4,F#4,A4]:4`,.6)),s(`strings`,r(`[D4,F#4,A4]:4 | [G3,B3,D4]:2 [A3,C#4,E4]:2 | [D4,F#4,A4,D5]:4`,.5)),s(`bass`,r(`D2:0.5 D2:0.5 D2:0.5 D2:2.5 | G2:2 A2:2 | D2:4`,.85)),s(`timp`,i(`x.x.x.x......... | x.......x...oooo | x...............`,38)),s(`crash`,i(`................ | ................ | x...............`,60)),s(`bell`,r(`r:4 | r:4 | D6:0.5 F#6:0.5 A6:0.5 D7:2.5`,.7))]},defeat:{bpm:72,beatsPerBar:4,bars:2,loop:!1,level:.77,tracks:[s(`strings`,r(`[D3,A3,F4]:4 | [Bb2,F3,D4]:2 [A2,E3,C#4]:2`,.6)),s(`flute`,r(`A4:1.5 G4:0.5 F4:2 | E4:1.5 D4:0.5 C#4:2`,.7)),s(`bass`,r(`D2:4 | Bb1:2 A1:2`,.7)),s(`timp`,i(`o............... | ........o.......`,38))]}},D=2,O=2e4,ee=new WeakMap,k=new Map;function te(e){let t=e>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function ne(e){return 440*2**((e-69)/12)}function A(e,t){let n=ee.get(e);n||(n=new Map,ee.set(e,n));let r=n.get(t);if(r)return r;let i=Math.floor(e.sampleRate*D),a=e.createBuffer(1,i,e.sampleRate),o=a.getChannelData(0),s=te(t===`white`?2654435769:2135587861);if(t===`white`)for(let e=0;e<i;e++)o[e]=s()*2-1;else{let e=0,t=0,n=0,r=0,a=0,c=0,l=0;for(let u=0;u<i;u++){let i=s()*2-1;e=.99886*e+i*.0555179,t=.99332*t+i*.0750759,n=.969*n+i*.153852,r=.8665*r+i*.3104856,a=.55*a+i*.5329522,c=-.7616*c-i*.016898,o[u]=(e+t+n+r+a+c+l+i*.5362)*.11,l=i*.115926}}return n.set(t,a),a}function re(e,t=1.7){let n=Math.floor(e.sampleRate*t),r=e.createBuffer(2,n,e.sampleRate);for(let e=0;e<2;e++){let t=r.getChannelData(e),i=te(e===0?625341585:461845907),a=0;for(let e=0;e<n;e++){let r=e/n,o=.55-.4*r;a+=(i()*2-1-a)*o,t[e]=a*Math.exp(-6.9*r)*(e<48?e/48:1)}}return r}function ie(e){let t=Math.round(e*100)/100,n=k.get(t);if(n)return n;let r=1024,i=new Float32Array(new ArrayBuffer(r*4)),a=1+t*12,o=Math.tanh(a);for(let e=0;e<r;e++){let t=e/1023*2-1;i[e]=Math.tanh(t*a)/o}return k.set(t,i),i}var ae=class{ctx;t0;rate;out;end;sources=[];panner=null;wetGain=null;lastSource=null;lastStop=-1/0;rnd;constructor(e){this.ctx=e.ctx,this.t0=e.t0,this.rate=Math.min(4,Math.max(.25,e.rate??1)),this.end=e.t0,this.rnd=te(e.seed??Math.floor(Math.random()*4294967296)),this.out=this.ctx.createGain(),this.out.gain.value=e.gain??1;let t=this.out,n=Math.min(1,Math.max(-1,e.pan??0));n!==0&&typeof this.ctx.createStereoPanner==`function`&&(this.panner=this.ctx.createStereoPanner(),this.panner.pan.value=n,this.out.connect(this.panner),t=this.panner),t.connect(e.dry);let r=e.send??0;e.wet&&r>0&&(this.wetGain=this.ctx.createGain(),this.wetGain.gain.value=r,t.connect(this.wetGain),this.wetGain.connect(e.wet))}rand(){return this.rnd()}range(e,t){return e+(t-e)*this.rnd()}at(e){return this.t0+e/this.rate}hz(e){return e*this.rate}env(e,t){let n=e.start??0,r=Math.max(e.attack??.002,5e-4),i=Math.max(e.hold??0,0),a=Math.max(e.decay,.001),o=this.ctx.createGain(),s=o.gain,c=this.at(n),l=this.at(n+r),u=this.at(n+r+i),d=this.at(n+r+i+a);return s.setValueAtTime(0,c),s.linearRampToValueAtTime(e.peak,l),i>0&&s.setValueAtTime(e.peak,u),(e.curve??`exp`)===`exp`?(s.exponentialRampToValueAtTime(Math.max(e.peak*.001,1e-5),d),s.setValueAtTime(0,d)):s.linearRampToValueAtTime(0,d),o.connect(t??this.out),this.touch(d),o}osc(e,t,n){let r=n.start??0,i=this.ctx.createOscillator();return i.type=e,n.detune&&(i.detune.value=n.detune),this.automate(i.frequency,r,t,n.glide,n.path,1),i.start(this.at(r)),i.stop(this.at(n.stop)),this.register(i,this.at(n.stop)),i}noise(e){let t=e.start??0,n=this.ctx.createBufferSource();return n.buffer=A(this.ctx,e.color??`white`),n.loop=!0,n.playbackRate.value=e.rate??1,n.start(this.at(t),this.range(0,D*.5)),n.stop(this.at(e.stop)),this.register(n,this.at(e.stop)),n}filter(e,t=0){let n=this.ctx.createBiquadFilter();return n.type=e.type,n.Q.value=e.Q??1,e.gain&&(n.gain.value=e.gain),this.automate(n.frequency,t,e.freq,e.glide,e.path,10),n}shaper(e){let t=this.ctx.createWaveShaper();return t.curve=ie(e),t}tone(e){let t=e.start??0,n=Math.max(e.attack??.002,5e-4),r=n+Math.max(e.hold??0,0)+Math.max(e.decay,.001),i=this.osc(e.type??`sine`,e.freq,{start:t,stop:t+r+.03,detune:e.detune,glide:e.glide,path:e.path}),a=i;if(e.shape){let t=this.shaper(e.shape);a.connect(t),a=t}let o=null;e.filter&&(o=this.filter(e.filter,t),a.connect(o),a=o);let s=this.env({peak:e.peak,attack:n,hold:e.hold,decay:e.decay,start:t,curve:e.curve},e.to);return a.connect(s),{osc:i,env:s,filter:o}}burst(e){let t=e.start??0,n=Math.max(e.attack??.002,5e-4),r=n+Math.max(e.hold??0,0)+Math.max(e.decay,.001),i=this.noise({start:t,stop:t+r+.03,color:e.color,rate:e.rate}),a=i;if(e.shape){let t=this.shaper(e.shape);a.connect(t),a=t}let o=null;if(e.filter&&(o=this.filter(e.filter,t),a.connect(o),a=o),e.filter2){let n=this.filter(e.filter2,t);a.connect(n),a=n}let s=this.env({peak:e.peak,attack:n,hold:e.hold,decay:e.decay,start:t,curve:e.curve},e.to);return a.connect(s),{src:i,env:s,filter:o}}vibrato(e,t,n,r,i){let a=this.ctx.createOscillator();a.frequency.value=t;let o=this.ctx.createGain();o.gain.value=n*this.rate,a.connect(o),o.connect(e.frequency),a.start(this.at(r)),a.stop(this.at(i)),this.register(a,this.at(i))}finalize(){let e=this.lastSource;e&&(e.onended=()=>{this.out.disconnect(),this.panner?.disconnect(),this.wetGain?.disconnect()})}kill(e){let t=this.out.gain;t.cancelScheduledValues(e),t.setValueAtTime(t.value,e),t.linearRampToValueAtTime(0,e+.02);for(let t of this.sources)try{t.stop(e+.05)}catch{}this.end=Math.min(this.end,e+.05)}touch(e){e>this.end&&(this.end=e)}register(e,t){this.sources.push(e),this.touch(t),t>this.lastStop&&(this.lastStop=t,this.lastSource=e)}automate(e,t,n,r,i,a){let o=e=>Math.min(O,Math.max(a,e*this.rate));if(e.setValueAtTime(o(n),this.at(t)),r){r.begin&&e.setValueAtTime(o(n),this.at(t+r.begin));let i=this.at(t+r.end);(r.curve??`exp`)===`exp`?e.exponentialRampToValueAtTime(o(r.to),i):e.linearRampToValueAtTime(o(r.to),i)}if(i)for(let[n,r]of i)e.exponentialRampToValueAtTime(o(r),this.at(t+n))}},oe={harp:{send:.3,play(e,t,n,r){e.tone({type:`triangle`,freq:t,attack:.002,decay:.8+80/t,peak:.45*r,filter:{type:`lowpass`,freq:Math.min(t*7,9e3),Q:.7,glide:{to:t*1.6,end:.35}}}),e.tone({type:`sine`,freq:t*2,attack:.002,decay:.2,peak:.1*r})}},pad:{send:.45,play(e,t,n,r){let i=Math.min(.5,n*.35),a=Math.max(.02,n-i-.1);for(let n of[-7,7])e.tone({type:`sawtooth`,freq:t,detune:n,attack:i,hold:a,decay:.5,peak:.09*r,curve:`lin`,filter:{type:`lowpass`,freq:Math.min(t*3,4e3),Q:.5}});e.tone({type:`triangle`,freq:t,attack:i,hold:a,decay:.5,peak:.1*r,curve:`lin`})}},bass:{send:.05,play(e,t,n,r){let i=Math.max(.02,n*.55),a=Math.max(.05,n*.35);e.tone({type:`square`,freq:t,attack:.004,hold:i,decay:a,peak:.22*r,filter:{type:`lowpass`,freq:t*5,Q:1.5,glide:{to:t*2,end:n*.6}}}),e.tone({type:`sine`,freq:t,attack:.004,hold:i,decay:a,peak:.35*r})}},brass:{send:.3,play(e,t,n,r){let i=Math.max(.02,n*.85-.09);for(let n of[-8,8])e.tone({type:`sawtooth`,freq:t,detune:n,attack:.03,hold:i,decay:.06,peak:.14*r,curve:`lin`,filter:{type:`lowpass`,freq:t*1.5,Q:1.3,glide:{to:Math.min(t*6,9e3),end:.09}}});e.tone({type:`square`,freq:t,attack:.03,hold:i,decay:.06,peak:.05*r,curve:`lin`,filter:{type:`lowpass`,freq:t*3}})}},pulse:{send:.25,play(e,t,n,r){let i=Math.max(.02,n*.8-.05);e.tone({type:`square`,freq:t,attack:.01,hold:i,decay:.05,peak:.08*r,curve:`lin`,filter:{type:`lowpass`,freq:Math.min(t*4,6e3),Q:1}}),e.tone({type:`triangle`,freq:t,attack:.01,hold:i,decay:.05,peak:.12*r,curve:`lin`})}},flute:{send:.35,play(e,t,n,r){let i=Math.max(.02,n*.9-.14),a=e.tone({type:`sine`,freq:t,attack:.06,hold:i,decay:.08,peak:.3*r,curve:`lin`});e.tone({type:`triangle`,freq:t,attack:.06,hold:i,decay:.08,peak:.06*r,curve:`lin`,filter:{type:`lowpass`,freq:t*3}}),e.vibrato(a.osc,5,t*.006,.15,n+.05),e.burst({attack:.04,hold:i,decay:.08,peak:.02*r,curve:`lin`,filter:{type:`bandpass`,freq:t*2,Q:8}})}},strings:{send:.5,play(e,t,n,r){let i=Math.min(.3,n*.3),a=Math.max(.02,n-i-.1);for(let n of[-10,0,10])e.tone({type:`sawtooth`,freq:t,detune:n,attack:i,hold:a,decay:.35,peak:.06*r,curve:`lin`,filter:{type:`lowpass`,freq:Math.min(t*4,5e3),Q:.7}})}},bell:{send:.5,play(e,t,n,r){e.tone({type:`sine`,freq:t,attack:.002,decay:1.2,peak:.3*r}),e.tone({type:`sine`,freq:t*2.76,attack:.002,decay:.5,peak:.08*r}),e.tone({type:`sine`,freq:t*5.4,attack:.002,decay:.25,peak:.03*r})}},kick:{send:.05,play(e,t,n,r){e.tone({type:`sine`,freq:150,glide:{to:45,end:.12},attack:.002,decay:.25,peak:.6*r}),e.burst({attack:.001,decay:.02,peak:.2*r,filter:{type:`lowpass`,freq:1500}})}},snare:{send:.25,play(e,t,n,r){e.burst({attack:.001,decay:.13,peak:.4*r,filter:{type:`bandpass`,freq:1800,Q:.7}}),e.burst({attack:.001,decay:.06,peak:.25*r,filter:{type:`highpass`,freq:4e3}}),e.tone({type:`triangle`,freq:200,glide:{to:120,end:.06},attack:.001,decay:.08,peak:.3*r})}},timp:{send:.35,play(e,t,n,r){e.tone({type:`sine`,freq:t*1.04,glide:{to:t,end:.1},attack:.003,decay:.7,peak:.5*r}),e.tone({type:`triangle`,freq:t*2,attack:.003,decay:.2,peak:.1*r,filter:{type:`lowpass`,freq:600}}),e.burst({attack:.001,decay:.04,peak:.2*r,filter:{type:`lowpass`,freq:500}})}},hand:{send:.2,play(e,t,n,r){e.burst({attack:.001,decay:.08,peak:.3*r,filter:{type:`bandpass`,freq:420,Q:2}}),e.tone({type:`sine`,freq:190,glide:{to:120,end:.08},attack:.001,decay:.1,peak:.35*r}),e.burst({attack:.001,decay:.02,peak:.1*r,filter:{type:`highpass`,freq:3e3}})}},crash:{send:.5,play(e,t,n,r){e.burst({attack:.002,decay:1.3,peak:.25*r,filter:{type:`highpass`,freq:3500,Q:.5}}),e.burst({attack:.002,decay:.4,peak:.2*r,filter:{type:`bandpass`,freq:6e3,Q:1}})}}},se=class{song;gain;finished=!1;ctx;wetGain;startTime;spb;loopBeats;cursors;stopAt=1/0;seed=1;constructor(e,t,n,r,i){this.ctx=e,this.song=t,this.startTime=i,this.spb=60/t.bpm,this.loopBeats=t.bars*t.beatsPerBar,this.cursors=t.tracks.map(()=>({idx:0,loop:0})),this.gain=e.createGain(),this.gain.connect(n),this.wetGain=e.createGain(),r&&this.wetGain.connect(r)}get endTime(){return this.song.loop?1/0:this.startTime+this.loopBeats*this.spb}fadeIn(e,t){for(let n of[this.gain.gain,this.wetGain.gain])n.setValueAtTime(0,e),n.linearRampToValueAtTime(this.song.level,e+Math.max(.01,t))}fadeOut(e,t){for(let n of[this.gain.gain,this.wetGain.gain])n.cancelScheduledValues(e),n.setValueAtTime(n.value,e),n.linearRampToValueAtTime(0,e+Math.max(.01,t));this.stopAt=e+t}scheduleUntil(e){let t=Math.min(e,this.stopAt),n=!0;this.song.tracks.forEach((e,r)=>{let i=this.cursors[r];if(e.notes.length!==0)for(;;){if(i.idx>=e.notes.length){if(!this.song.loop)return;i.idx=0,i.loop++}let r=e.notes[i.idx],a=this.startTime+(i.loop*this.loopBeats+r.t)*this.spb;if(a>=t){n=!1;return}this.playNote(e,r,a),i.idx++}}),!this.song.loop&&n&&(this.finished=!0)}isDone(e){return e>this.stopAt+.1||this.finished&&e>this.endTime+3}dispose(){this.gain.disconnect(),this.wetGain.disconnect()}playNote(e,t,n){let r=oe[e.inst],i=new ae({ctx:this.ctx,dry:this.gain,wet:this.wetGain,t0:n,gain:e.gain??1,send:r.send,seed:this.seed++});r.play(i,ne(t.midi),t.dur*this.spb,t.vel),i.finalize()}};function ce(e,t,n,r,i=.012){e.burst({start:t,attack:.001,decay:i,peak:r,filter:{type:`bandpass`,freq:n,Q:1.2}})}function le(e,t,n=0,r=`sine`){for(let[i,a,o]of t)e.tone({type:r,freq:i,start:n,attack:.002,decay:o,peak:a})}function ue(e,t,n,r,i,a){t.forEach((t,o)=>e.tone({type:`sine`,freq:t,start:n+o*r,attack:.004,decay:i,peak:a}))}var de={uiMove:{voices:3,gap:.02,jitter:.03,send:.08,build(e){e.tone({type:`sine`,freq:1900,glide:{to:1300,end:.05},attack:.001,decay:.06,peak:.5}),e.burst({attack:.001,decay:.03,peak:.35,filter:{type:`bandpass`,freq:3200,Q:2}})}},uiSelect:{voices:2,gap:.05,jitter:0,send:.2,build(e){for(let[t,n]of[[0,659.26],[.09,987.77]])e.tone({type:`sine`,freq:n,start:t,attack:.003,decay:.22,peak:.42}),e.tone({type:`triangle`,freq:n,start:t,attack:.003,decay:.12,peak:.18}),e.tone({type:`sine`,freq:n*2,start:t,attack:.003,decay:.1,peak:.08})}},uiCancel:{voices:2,gap:.04,jitter:.02,send:.08,build(e){e.tone({type:`square`,freq:330,glide:{to:200,end:.1},attack:.002,decay:.11,peak:.35,filter:{type:`lowpass`,freq:900,Q:1}})}},uiError:{voices:1,gap:.1,jitter:0,send:.05,build(e){for(let t of[0,.13])e.tone({type:`square`,freq:140,start:t,attack:.004,hold:.02,decay:.1,peak:.3,curve:`lin`,filter:{type:`lowpass`,freq:700,Q:2}}),e.tone({type:`sawtooth`,freq:141.5,start:t,attack:.004,hold:.02,decay:.1,peak:.22,curve:`lin`,filter:{type:`lowpass`,freq:600}})}},turnStart:{voices:2,gap:.03,jitter:.03,send:.1,build(e){e.tone({type:`sine`,freq:1100,glide:{to:900,end:.04},attack:.001,decay:.045,peak:.4}),ce(e,0,2600,.3,.015)}},yourTurn:{voices:1,gap:.2,jitter:0,send:.25,build(e){for(let[t,n,r]of[[0,783.99,.14],[.11,987.77,.14],[.22,1174.66,.4]])e.tone({type:`triangle`,freq:n,start:t,attack:.004,decay:r,peak:.35}),e.tone({type:`sine`,freq:n*2,start:t,attack:.004,decay:r*.7,peak:.12})}},step:{voices:3,gap:.04,jitter:.08,send:.06,build(e){e.burst({attack:.002,decay:.09,peak:.6,filter:{type:`lowpass`,freq:420,Q:.8,glide:{to:140,end:.08}}}),e.tone({type:`sine`,freq:95,glide:{to:55,end:.05},attack:.002,decay:.06,peak:.45}),ce(e,0,1500,.12,.01)}},jump:{voices:2,gap:.05,jitter:.05,send:.1,build(e){e.burst({attack:.05,decay:.16,peak:.5,filter:{type:`bandpass`,freq:450,Q:1.4,glide:{to:2600,end:.2}}}),e.tone({type:`sine`,freq:300,glide:{to:640,end:.2},attack:.04,decay:.16,peak:.12})}},land:{voices:3,gap:.04,jitter:.06,send:.08,build(e){e.tone({type:`sine`,freq:130,glide:{to:42,end:.12},attack:.002,decay:.16,peak:.6}),e.burst({attack:.002,decay:.07,peak:.45,filter:{type:`lowpass`,freq:350,Q:.7}})}},swing:{voices:3,gap:.04,jitter:.08,send:.08,build(e){e.burst({attack:.06,decay:.15,peak:.55,filter:{type:`bandpass`,freq:320,Q:2,path:[[.08,1900],[.24,700]]}})}},slash:{voices:3,gap:.04,jitter:.05,send:.15,build(e){e.burst({attack:.03,decay:.1,peak:.4,filter:{type:`bandpass`,freq:600,Q:1.5,glide:{to:3500,end:.09}}}),e.burst({start:.06,attack:.002,decay:.12,peak:.45,filter:{type:`highpass`,freq:3800,Q:.7}}),le(e,[[2400,.22,.18],[3620,.16,.14],[5200,.08,.1]],.06)}},pierce:{voices:3,gap:.04,jitter:.06,send:.1,build(e){e.burst({attack:.015,decay:.07,peak:.45,filter:{type:`bandpass`,freq:1400,Q:3,glide:{to:6500,end:.06}}}),e.tone({type:`triangle`,freq:900,glide:{to:260,end:.1},start:.05,attack:.002,decay:.12,peak:.4,filter:{type:`lowpass`,freq:2500}}),ce(e,.05,2200,.3,.012)}},blunt:{voices:3,gap:.04,jitter:.06,send:.12,build(e){e.tone({type:`sine`,freq:95,glide:{to:38,end:.15},attack:.002,decay:.22,peak:.65}),e.burst({attack:.002,decay:.12,peak:.55,shape:.6,filter:{type:`lowpass`,freq:950,Q:1.2,glide:{to:250,end:.1}}}),e.tone({type:`triangle`,freq:230,glide:{to:110,end:.08},attack:.002,decay:.09,peak:.3})}},hit:{voices:4,gap:.025,jitter:.07,send:.1,build(e){e.burst({attack:.002,decay:.1,peak:.55,filter:{type:`bandpass`,freq:1200,Q:.9,glide:{to:500,end:.08}}}),e.tone({type:`sine`,freq:190,glide:{to:70,end:.09},attack:.002,decay:.12,peak:.5})}},crit:{voices:2,gap:.05,jitter:.03,send:.25,build(e){e.tone({type:`sine`,freq:160,glide:{to:48,end:.18},attack:.002,decay:.3,peak:.6}),e.burst({attack:.002,decay:.16,peak:.55,shape:.5,filter:{type:`lowpass`,freq:3e3,Q:1,glide:{to:400,end:.14}}}),le(e,[[1760,.3,.5],[2637,.2,.42],[3520,.12,.35]],.015),e.burst({start:.01,attack:.002,decay:.08,peak:.3,filter:{type:`highpass`,freq:5e3}})}},miss:{voices:3,gap:.04,jitter:.08,send:.08,build(e){e.burst({attack:.05,decay:.18,peak:.45,filter:{type:`bandpass`,freq:1300,Q:3,glide:{to:380,end:.22}}})}},block:{voices:3,gap:.04,jitter:.03,send:.2,build(e){le(e,[[520,.35,.32],[1310,.28,.26],[2150,.2,.2],[3480,.12,.15],[4900,.07,.1]]),e.burst({attack:.001,decay:.04,peak:.5,filter:{type:`bandpass`,freq:2500,Q:.8}}),e.tone({type:`sine`,freq:150,glide:{to:80,end:.06},attack:.002,decay:.08,peak:.3})}},counter:{voices:2,gap:.05,jitter:.03,send:.18,build(e){le(e,[[640,.3,.2],[1610,.24,.16],[2650,.15,.12]]),e.burst({attack:.001,decay:.035,peak:.45,filter:{type:`bandpass`,freq:2800,Q:.8}}),e.burst({start:.12,attack:.05,decay:.15,peak:.5,filter:{type:`bandpass`,freq:400,Q:2,path:[[.2,2200],[.32,900]]}})}},bowDraw:{voices:2,gap:.05,jitter:.05,send:.08,build(e){e.tone({type:`sawtooth`,freq:52,glide:{to:78,end:.3},attack:.04,hold:.15,decay:.12,peak:.45,filter:{type:`bandpass`,freq:520,Q:7,glide:{to:950,end:.3}}}),e.burst({color:`pink`,attack:.05,hold:.1,decay:.15,peak:.12,filter:{type:`lowpass`,freq:1800}})}},arrow:{voices:3,gap:.04,jitter:.05,send:.12,build(e){e.tone({type:`triangle`,freq:210,attack:.001,decay:.12,peak:.5,filter:{type:`lowpass`,freq:3200,Q:2,glide:{to:350,end:.1}}}),e.tone({type:`sine`,freq:420,attack:.001,decay:.05,peak:.25}),e.burst({start:.02,attack:.02,decay:.24,peak:.4,filter:{type:`bandpass`,freq:3200,Q:5,glide:{to:1100,end:.28}}})}},bolt:{voices:3,gap:.04,jitter:.05,send:.12,build(e){e.tone({type:`sine`,freq:160,glide:{to:75,end:.06},attack:.001,decay:.09,peak:.55}),e.tone({type:`triangle`,freq:115,attack:.001,decay:.1,peak:.4,filter:{type:`lowpass`,freq:2200,Q:2,glide:{to:250,end:.08}}}),ce(e,0,1800,.35,.012),e.burst({start:.03,attack:.015,decay:.2,peak:.35,filter:{type:`bandpass`,freq:2200,Q:4,glide:{to:700,end:.22}}})}},fire:{voices:2,gap:.05,jitter:.05,send:.18,build(e){e.burst({attack:.08,decay:.6,peak:.55,filter:{type:`lowpass`,freq:220,Q:1,path:[[.1,1100],[.7,260]]}}),e.tone({type:`sine`,freq:75,glide:{to:45,end:.5},attack:.05,decay:.55,peak:.3});for(let t=0;t<9;t++)ce(e,e.range(.05,.75),e.range(2e3,5e3),e.range(.12,.3),e.range(.006,.016))}},frost:{voices:2,gap:.05,jitter:.03,send:.35,build(e){let t=[2093,2637,3136,3951,4186,5274];for(let n=0;n<7;n++){let r=t[Math.floor(e.rand()*t.length)]??2093;e.tone({type:`sine`,freq:r,start:n*.055+e.range(0,.03),attack:.004,decay:e.range(.25,.45),peak:.22})}e.burst({attack:.15,decay:.5,peak:.18,filter:{type:`bandpass`,freq:2500,Q:2,glide:{to:9e3,end:.6}}}),e.tone({type:`triangle`,freq:1046,glide:{to:1568,end:.5},attack:.2,decay:.45,peak:.1})}},shatter:{voices:2,gap:.05,jitter:.05,send:.25,build(e){e.burst({attack:.001,decay:.14,peak:.5,filter:{type:`highpass`,freq:2600,Q:.7}}),e.tone({type:`sine`,freq:300,glide:{to:120,end:.06},attack:.001,decay:.07,peak:.3});for(let t=0;t<7;t++)e.tone({type:`sine`,freq:e.range(2800,7500),start:e.range(.01,.22),attack:.002,decay:e.range(.08,.26),peak:.16})}},lightning:{voices:3,gap:.03,jitter:.06,send:.2,build(e){e.burst({attack:.001,decay:.09,peak:.6,filter:{type:`highpass`,freq:1400,Q:.6}}),e.tone({type:`sawtooth`,freq:1400,glide:{to:180,end:.11},attack:.001,decay:.12,peak:.4,shape:.7,filter:{type:`lowpass`,freq:5e3}}),e.burst({start:.05,attack:.01,decay:.4,peak:.3,filter:{type:`lowpass`,freq:180,Q:1}});for(let t=0;t<6;t++)ce(e,e.range(.02,.3),e.range(2500,7e3),e.range(.15,.35),.006)}},holy:{voices:1,gap:.2,jitter:.01,send:.5,build(e){for(let t of[523.25,659.25,783.99,1046.5,1568])for(let n of[-7,7])e.tone({type:`triangle`,freq:t,detune:n,attack:.3,hold:.25,decay:.6,peak:.1,curve:`lin`,filter:{type:`bandpass`,freq:1100,Q:.8}});e.tone({type:`sine`,freq:1046,glide:{to:4186,end:.9},attack:.2,decay:.8,peak:.08}),e.burst({attack:.3,decay:.7,peak:.08,filter:{type:`bandpass`,freq:4e3,Q:1.5,glide:{to:9e3,end:1}}})}},shadow:{voices:1,gap:.2,jitter:.02,send:.4,build(e){for(let[t,n]of[[110,-12],[110,12],[155.56,-8],[164.81,9]])e.tone({type:`sawtooth`,freq:t,detune:n,glide:{to:t*.84,end:.95,begin:.6},attack:.6,hold:.05,decay:.25,peak:.18,curve:`lin`,filter:{type:`lowpass`,freq:180,Q:3,glide:{to:1400,end:.65}}});e.burst({color:`pink`,attack:.6,decay:.2,peak:.3,curve:`lin`,filter:{type:`lowpass`,freq:300,glide:{to:2500,end:.65}}})}},poison:{voices:2,gap:.05,jitter:.05,send:.15,build(e){for(let t=0;t<7;t++){let n=e.range(220,420);e.tone({type:`sine`,freq:n,glide:{to:n*2.1,end:.07},start:t*.08+e.range(0,.04),attack:.004,decay:.09,peak:.3,filter:{type:`lowpass`,freq:1200}})}e.burst({color:`pink`,attack:.05,hold:.3,decay:.3,peak:.12,curve:`lin`,filter:{type:`lowpass`,freq:500,Q:2}})}},burnTick:{voices:3,gap:.03,jitter:.1,send:.05,build(e){for(let t of[0,.04,.09])e.burst({start:t,attack:.002,decay:.035,peak:.3,filter:{type:`highpass`,freq:3500}});e.burst({attack:.01,decay:.12,peak:.12,filter:{type:`bandpass`,freq:6e3,Q:1}})}},castStart:{voices:2,gap:.1,jitter:.02,send:.3,build(e){for(let t of[-6,6])e.tone({type:`sawtooth`,freq:110,detune:t,glide:{to:330,end:.6},attack:.1,hold:.45,decay:.12,peak:.2,curve:`lin`,filter:{type:`lowpass`,freq:300,Q:2,glide:{to:2600,end:.6}}});e.tone({type:`triangle`,freq:220,glide:{to:660,end:.6},attack:.1,hold:.45,decay:.12,peak:.15,curve:`lin`}),ue(e,[880,1108.73,1318.51,1760,2217.46],.15,.09,.2,.1)}},castRelease:{voices:3,gap:.04,jitter:.04,send:.3,build(e){e.burst({attack:.002,decay:.1,peak:.4,filter:{type:`highpass`,freq:2200}}),le(e,[[880,.3,.3],[1320,.22,.3],[1760,.18,.3],[2640,.08,.3]]),e.burst({start:.02,attack:.02,decay:.3,peak:.3,filter:{type:`bandpass`,freq:3e3,Q:2,glide:{to:500,end:.3}}})}},heal:{voices:2,gap:.1,jitter:.02,send:.4,build(e){[587.33,739.99,880,1174.66].forEach((t,n)=>{let r=n*.12;e.tone({type:`triangle`,freq:t,start:r,attack:.01,decay:.45,peak:.26,filter:{type:`lowpass`,freq:3e3}}),e.tone({type:`sine`,freq:t*2,start:r,attack:.01,decay:.3,peak:.08})}),e.burst({attack:.2,decay:.5,peak:.1,filter:{type:`bandpass`,freq:3500,Q:2,glide:{to:7e3,end:.6}}})}},buff:{voices:2,gap:.05,jitter:.03,send:.3,build(e){e.burst({attack:.05,decay:.5,peak:.3,filter:{type:`bandpass`,freq:800,Q:2.5,glide:{to:5500,end:.45}}}),e.tone({type:`triangle`,freq:440,glide:{to:880,end:.4},attack:.05,decay:.5,peak:.3}),e.tone({type:`sine`,freq:880,glide:{to:1760,end:.4},attack:.05,decay:.45,peak:.14})}},debuff:{voices:2,gap:.05,jitter:.03,send:.25,build(e){for(let t of[-18,18])e.tone({type:`sawtooth`,freq:440,detune:t,glide:{to:170,end:.5},attack:.02,decay:.5,peak:.22,filter:{type:`lowpass`,freq:1300,Q:2,glide:{to:350,end:.5}}});e.tone({type:`sine`,freq:220,glide:{to:85,end:.5},attack:.02,decay:.5,peak:.25})}},cleanse:{voices:2,gap:.05,jitter:.03,send:.35,build(e){e.burst({attack:.1,decay:.45,peak:.35,filter:{type:`highpass`,freq:1e3,Q:1,glide:{to:8e3,end:.5}}}),e.tone({type:`sine`,freq:1568,glide:{to:3136,end:.45},attack:.08,decay:.45,peak:.22}),e.tone({type:`sine`,freq:2349,glide:{to:4699,end:.45},attack:.1,decay:.4,peak:.1})}},explosion:{voices:2,gap:.05,jitter:.05,send:.3,build(e){e.tone({type:`sine`,freq:95,glide:{to:28,end:.5},attack:.003,decay:.6,peak:.6}),e.burst({attack:.004,decay:.9,peak:.6,shape:.5,filter:{type:`lowpass`,freq:2800,Q:.8,glide:{to:180,end:.8}}});for(let t=0;t<7;t++)e.burst({start:e.range(.25,1),attack:.002,decay:e.range(.02,.06),peak:e.range(.1,.25),filter:{type:`bandpass`,freq:e.range(900,3200),Q:2}})}},trap:{voices:2,gap:.05,jitter:.05,send:.15,build(e){ce(e,0,1600,.5,.012),le(e,[[900,.3,.2],[1450,.24,.16],[2370,.15,.12]],.01),e.tone({type:`sine`,freq:140,glide:{to:60,end:.08},attack:.002,decay:.1,peak:.35})}},smoke:{voices:2,gap:.05,jitter:.04,send:.2,build(e){e.burst({color:`pink`,attack:.03,decay:.5,peak:.5,filter:{type:`lowpass`,freq:3200,Q:.6,glide:{to:700,end:.5}}}),e.burst({attack:.01,decay:.08,peak:.25,filter:{type:`bandpass`,freq:2e3,Q:1}})}},summon:{voices:1,gap:.2,jitter:.02,send:.45,build(e){for(let[t,n]of[[220,-8],[220,8],[329.63,-5],[440,6]])e.tone({type:`sawtooth`,freq:t,detune:n,attack:.5,hold:.2,decay:.35,peak:.14,curve:`lin`,filter:{type:`lowpass`,freq:300,Q:2,glide:{to:3200,end:.6}}});ue(e,[880,1108.73,1318.51,1760,2217.46,2637.02],.35,.07,.3,.1),e.burst({attack:.4,decay:.5,peak:.1,filter:{type:`bandpass`,freq:3e3,Q:2,glide:{to:8e3,end:.9}}})}},howl:{voices:1,gap:.3,jitter:.04,send:.4,build(e){let t=[[.25,540],[.6,500],[.95,380]],n=e.tone({type:`sawtooth`,freq:320,path:t,attack:.15,hold:.5,decay:.3,peak:.3,curve:`lin`,filter:{type:`bandpass`,freq:700,Q:4,path:[[.3,1100],[.9,650]]}}),r=e.tone({type:`sawtooth`,freq:320,path:t,attack:.15,hold:.5,decay:.3,peak:.16,curve:`lin`,filter:{type:`bandpass`,freq:1300,Q:5,path:[[.3,1900],[.9,1200]]}});e.vibrato(n.osc,5.5,12,.2,1),e.vibrato(r.osc,5.5,12,.2,1)}},vanish:{voices:2,gap:.05,jitter:.04,send:.3,build(e){e.burst({attack:.3,decay:.06,peak:.5,curve:`lin`,filter:{type:`bandpass`,freq:2600,Q:1.5,glide:{to:500,end:.36}}}),e.tone({type:`sine`,freq:1200,glide:{to:300,end:.36},attack:.3,decay:.05,peak:.2,curve:`lin`})}},teleport:{voices:2,gap:.05,jitter:.04,send:.3,build(e){e.tone({type:`square`,freq:300,glide:{to:3200,end:.16},attack:.005,hold:.1,decay:.2,peak:.25,filter:{type:`lowpass`,freq:4e3}}),e.tone({type:`sine`,freq:450,glide:{to:4800,end:.16},attack:.005,hold:.1,decay:.2,peak:.3}),e.burst({attack:.01,decay:.3,peak:.25,filter:{type:`highpass`,freq:1500,glide:{to:7e3,end:.2}}})}},shield:{voices:2,gap:.05,jitter:.03,send:.3,build(e){e.tone({type:`triangle`,freq:165,attack:.08,hold:.1,decay:.35,peak:.35,filter:{type:`lowpass`,freq:900}}),e.tone({type:`triangle`,freq:330,detune:5,attack:.08,hold:.1,decay:.3,peak:.18}),le(e,[[1320,.3,.45],[1980,.18,.45],[2640,.08,.45]],.1)}},surgeReady:{voices:1,gap:.2,jitter:.01,send:.35,build(e){e.tone({type:`sine`,freq:523,glide:{to:1046,end:.12},attack:.01,decay:.2,peak:.25});let t=1046.5;le(e,[[t,.35,.6],[t*2,.2,.45],[t*3.01,.14,.35],[t*4.2,.08,.25]],.1)}},surge:{voices:1,gap:.3,jitter:.02,send:.4,build(e){e.tone({type:`sine`,freq:130,glide:{to:34,end:.6},attack:.003,decay:.7,peak:.6}),e.burst({attack:.003,decay:.8,peak:.55,shape:.5,filter:{type:`lowpass`,freq:4500,Q:.8,glide:{to:250,end:.7}}});for(let[t,n]of[[220,-9],[220,9],[329.63,-6],[440,7],[554.37,-5]])e.tone({type:`sawtooth`,freq:t,detune:n,attack:.01,hold:.3,decay:.6,peak:.12,filter:{type:`lowpass`,freq:3500,Q:1.5,glide:{to:500,end:.9}}});le(e,[[2093,.2,.7],[3136,.12,.7],[4186,.06,.7]],.02),e.burst({start:.3,attack:.1,decay:1,peak:.25,filter:{type:`lowpass`,freq:160,Q:1}})}},ko:{voices:2,gap:.1,jitter:.02,send:.25,build(e){e.tone({type:`triangle`,freq:660,glide:{to:160,end:.45},attack:.01,hold:.3,decay:.15,peak:.35,curve:`lin`}),e.tone({type:`sine`,freq:660,glide:{to:160,end:.45},attack:.01,hold:.3,decay:.15,peak:.2,curve:`lin`}),e.tone({type:`sine`,freq:120,glide:{to:40,end:.12},start:.45,attack:.002,decay:.2,peak:.6}),e.burst({start:.45,attack:.002,decay:.08,peak:.4,filter:{type:`lowpass`,freq:400}})}},revive:{voices:1,gap:.2,jitter:.02,send:.4,build(e){[349.23,440,523.25,698.46,880].forEach((t,n)=>{let r=n*.09;e.tone({type:`triangle`,freq:t,start:r,attack:.03,hold:.25-n*.03,decay:.45,peak:.2,filter:{type:`lowpass`,freq:2500}}),e.tone({type:`sine`,freq:t*2,start:r,attack:.03,decay:.4,peak:.07})}),e.burst({attack:.25,decay:.5,peak:.1,filter:{type:`bandpass`,freq:3e3,Q:2,glide:{to:8e3,end:.7}}})}},steal:{voices:2,gap:.05,jitter:.04,send:.15,build(e){e.tone({type:`sawtooth`,freq:330,glide:{to:300,end:.1},attack:.002,decay:.12,peak:.4,filter:{type:`lowpass`,freq:2500,Q:3,glide:{to:400,end:.1}}});for(let[t,n]of[[2400,.3],[3600,.2],[4800,.08]])e.tone({type:`sine`,freq:t,glide:{to:t*1.06,end:.3},start:.13,attack:.002,decay:.28,peak:n});ce(e,.13,5e3,.2,.01)}},item:{voices:2,gap:.05,jitter:.05,send:.1,build(e){e.tone({type:`sine`,freq:520,glide:{to:150,end:.09},attack:.004,decay:.1,peak:.4,filter:{type:`lowpass`,freq:1500}}),e.tone({type:`sine`,freq:700,glide:{to:1100,end:.05},start:.13,attack:.002,decay:.07,peak:.4}),ce(e,.13,1200,.3,.01)}},thud:{voices:3,gap:.04,jitter:.06,send:.1,build(e){e.tone({type:`sine`,freq:230,glide:{to:105,end:.1},attack:.002,decay:.14,peak:.5}),e.tone({type:`triangle`,freq:460,glide:{to:220,end:.08},attack:.002,decay:.08,peak:.25,filter:{type:`lowpass`,freq:1200}}),e.burst({attack:.002,decay:.05,peak:.35,filter:{type:`lowpass`,freq:650}})}},fall:{voices:2,gap:.05,jitter:.03,send:.2,build(e){let t=e.tone({type:`sine`,freq:1900,glide:{to:380,end:.62},attack:.05,hold:.4,decay:.2,peak:.35,curve:`lin`});e.vibrato(t.osc,7,25,.1,.7),e.burst({attack:.1,hold:.3,decay:.25,peak:.12,curve:`lin`,filter:{type:`bandpass`,freq:2200,Q:4,glide:{to:500,end:.62}}})}},splash:{voices:2,gap:.05,jitter:.05,send:.25,build(e){e.burst({attack:.003,decay:.16,peak:.5,filter:{type:`lowpass`,freq:2200,Q:.7}}),e.burst({color:`pink`,start:.05,attack:.05,decay:.5,peak:.3,filter:{type:`lowpass`,freq:1400,glide:{to:500,end:.5}}});for(let t=0;t<5;t++){let t=e.range(350,700);e.tone({type:`sine`,freq:t,glide:{to:t*2.2,end:.06},start:e.range(.05,.35),attack:.003,decay:.07,peak:.22})}}}},fe={uiMove:.63,uiSelect:.775,uiCancel:.864,uiError:.812,turnStart:.777,yourTurn:1.133,step:.695,jump:2.205,land:.818,swing:2.469,slash:.545,pierce:1.357,blunt:.619,hit:1.029,crit:.496,miss:3.869,block:.453,counter:.567,bowDraw:2.722,arrow:.954,bolt:.571,fire:1.48,frost:1.317,shatter:.599,lightning:.484,holy:.964,shadow:.821,poison:1.584,castStart:1.205,castRelease:.463,heal:1.457,buff:1.298,debuff:.984,cleanse:.778,explosion:.621,trap:.786,smoke:1.798,summon:1.122,howl:3.082,vanish:1.58,teleport:.653,shield:.59,surgeReady:.748,surge:.422,ko:.812,revive:.772,steal:.892,item:1.166,thud:.839,fall:1.215,splash:1.772,burnTick:.857},pe={master:.9,music:.45,sfx:1},me=.35;function he(e,t,n){let r=e.createGain();r.gain.value=n.sfx,r.connect(t);let i=e.createGain();i.gain.value=n.music,i.connect(t);let a=e.createConvolver();a.buffer=re(e);let o=e.createGain();o.gain.value=me,a.connect(o),o.connect(t);let s=e.createGain();s.gain.value=n.sfx,s.connect(a);let c=e.createGain();return c.gain.value=n.music,c.connect(a),{sfxBus:r,musicBus:i,sfxSend:s,musicSend:c,reverb:a,reverbReturn:o}}function ge(){let e=globalThis;return e.AudioContext??e.webkitAudioContext??null}var _e=class{Ctor;ctx=null;bus=null;master=null;vol={...pe};isMuted=!1;unlockedAt=0;voices=[];lastTrigger=new Map;wanted=null;wantedFade=1;current=null;players=[];timer=null;constructor(){this.Ctor=ge()}get muted(){return this.isMuted}get context(){return this.ctx}unlock(){if(this.Ctor){if(!this.ctx){let e;try{e=new this.Ctor({latencyHint:`interactive`})}catch{return}this.ctx=e,this.buildGraph(e),typeof document<`u`&&document.addEventListener(`visibilitychange`,()=>this.tick())}this.ctx.state===`suspended`&&this.ctx.resume().catch(()=>void 0),this.unlockedAt=Date.now(),this.applyMusic()}}sfx(e,t={}){let n=this.ctx,r=this.bus,i=de[e];if(!n||!r||!i)return;if(n.state!==`running`&&Date.now()-this.unlockedAt>2e3){n.resume().catch(()=>void 0);return}let a=n.currentTime,o=a+Math.max(0,t.delay??0)+.005,s=this.lastTrigger.get(e);if(s!==void 0&&o-s<(i.gap??.03))return;this.lastTrigger.set(e,o),this.voices=this.voices.filter(e=>e.patch.end>a);let c=this.voices.filter(t=>t.name===e),l=Math.max(1,i.voices??4),u=Math.min(c.length,l);c.length>=l&&this.steal(c[0],a),this.voices.length>=32&&this.steal(this.voices[0],a);let d=i.jitter??.04,f=Math.max(.25,t.pitch??1)*(1+(Math.random()*2-1)*d),p=Math.min(1,Math.max(0,t.volume??1))*fe[e]*(1+(Math.random()*2-1)*.1)*.8**u,m=new ae({ctx:n,dry:r.sfxBus,wet:r.sfxSend,t0:o,rate:f,gain:p,pan:t.pan??0,send:i.send??.15});i.build(m),m.finalize(),this.voices.push({name:e,patch:m})}music(e,t=1){this.wanted=e,this.wantedFade=t,this.applyMusic()}setVolumes(e){e.master!==void 0&&(this.vol.master=ve(e.master)),e.music!==void 0&&(this.vol.music=ve(e.music)),e.sfx!==void 0&&(this.vol.sfx=ve(e.sfx)),this.applyVolumes()}setMuted(e){this.isMuted=e,this.applyVolumes()}buildGraph(e){let t=e.createDynamicsCompressor();t.threshold.value=-12,t.knee.value=12,t.ratio.value=3,t.attack.value=.004,t.release.value=.18;let n=e.createDynamicsCompressor();n.threshold.value=-3,n.knee.value=0,n.ratio.value=20,n.attack.value=.001,n.release.value=.06;let r=e.createGain();r.gain.value=this.isMuted?0:this.vol.master,t.connect(n),n.connect(r),r.connect(e.destination),this.master=r,this.bus=he(e,t,this.vol)}steal(e,t){e.patch.kill(t),this.voices=this.voices.filter(t=>t!==e)}applyVolumes(){let e=this.ctx,t=this.bus,n=this.master;if(!e||!t||!n)return;let r=e.currentTime;t.sfxBus.gain.setTargetAtTime(this.vol.sfx,r,.02),t.sfxSend.gain.setTargetAtTime(this.vol.sfx,r,.02),t.musicBus.gain.setTargetAtTime(this.vol.music,r,.02),t.musicSend.gain.setTargetAtTime(this.vol.music,r,.02),n.gain.setTargetAtTime(this.isMuted?0:this.vol.master,r,.02)}applyMusic(){let e=this.ctx,t=this.bus;if(!e||!t)return;let n=this.wanted,r=Math.max(.02,this.wantedFade);if(this.current&&this.current.track===n&&!this.current.player.finished)return;let i=e.currentTime;if(this.current&&=(this.current.player.fadeOut(i,r),null),!n)return;let a=E[n],o=new se(e,a,t.musicBus,t.musicSend,i+.08);o.fadeIn(i,a.loop?r:.03),this.current={track:n,player:o},this.players.push(o),this.timer===null&&(this.timer=setInterval(()=>this.tick(),50)),this.tick()}tick(){let e=this.ctx;if(!e)return;let t=typeof document<`u`&&document.hidden,n=e.currentTime+(t?1.6:.3);for(let e of this.players)e.scheduleUntil(n);let r=e.currentTime;this.players=this.players.filter(e=>!e.isDone(r)||(e.dispose(),!1)),this.players.length===0&&this.timer!==null&&(clearInterval(this.timer),this.timer=null)}};function ve(e){return Math.min(1,Math.max(0,e))}var ye=1e3,be=1001,xe=1002,Se=1003,Ce=1004,we=1005,Te=1006,Ee=1007,De=1008,Oe=1009,j=1010,ke=1011,Ae=1012,je=1013,Me=1014,Ne=1015,Pe=1016,Fe=1017,Ie=1018,Le=1020,M=35902,Re=35899,N=1021,ze=1022,Be=1023,Ve=1026,He=1027,Ue=1028,We=1029,Ge=1030,Ke=1031,qe=1033,Je=33776,Ye=33777,Xe=33778,Ze=33779,Qe=35840,$e=35841,et=35842,tt=35843,nt=36196,rt=37492,it=37496,at=37488,ot=37489,st=37490,ct=37491,lt=37808,ut=37809,dt=37810,ft=37811,pt=37812,mt=37813,ht=37814,gt=37815,_t=37816,vt=37817,yt=37818,bt=37819,xt=37820,St=37821,Ct=36492,wt=36494,Tt=36495,Et=36283,Dt=36284,Ot=36285,kt=36286,At=2300,jt=2301,Mt=2302,Nt=2303,Pt=2400,Ft=2401,It=2402,Lt=3200,Rt=`srgb`,zt=`srgb-linear`,Bt=`linear`,Vt=`srgb`,Ht=7680,Ut=35044,Wt=2e3;function Gt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Kt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function qt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Jt(){let e=qt(`canvas`);return e.style.display=`block`,e}var Yt={};function Xt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Zt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function P(...e){e=Zt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function F(...e){e=Zt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Qt(...e){let t=e.join(` `);t in Yt||(Yt[t]=!0,P(...e))}function $t(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var en={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},tn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},nn=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),rn=1234567,an=Math.PI/180,on=180/Math.PI;function sn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(nn[e&255]+nn[e>>8&255]+nn[e>>16&255]+nn[e>>24&255]+`-`+nn[t&255]+nn[t>>8&255]+`-`+nn[t>>16&15|64]+nn[t>>24&255]+`-`+nn[n&63|128]+nn[n>>8&255]+`-`+nn[n>>16&255]+nn[n>>24&255]+nn[r&255]+nn[r>>8&255]+nn[r>>16&255]+nn[r>>24&255]).toLowerCase()}function cn(e,t,n){return Math.max(t,Math.min(n,e))}function ln(e,t){return(e%t+t)%t}function un(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function dn(e,t,n){return e===t?0:(n-e)/(t-e)}function fn(e,t,n){return(1-n)*e+n*t}function pn(e,t,n,r){return fn(e,t,1-Math.exp(-n*r))}function mn(e,t=1){return t-Math.abs(ln(e,t*2)-t)}function hn(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function gn(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function _n(e,t){return e+Math.floor(Math.random()*(t-e+1))}function vn(e,t){return e+Math.random()*(t-e)}function yn(e){return e*(.5-Math.random())}function bn(e){e!==void 0&&(rn=e);let t=rn+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xn(e){return e*an}function Sn(e){return e*on}function Cn(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function wn(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Tn(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function En(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:P(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Dn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function On(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var kn={DEG2RAD:an,RAD2DEG:on,generateUUID:sn,clamp:cn,euclideanModulo:ln,mapLinear:un,inverseLerp:dn,lerp:fn,damp:pn,pingpong:mn,smoothstep:hn,smootherstep:gn,randInt:_n,randFloat:vn,randFloatSpread:yn,seededRandom:bn,degToRad:xn,radToDeg:Sn,isPowerOfTwo:Cn,ceilPowerOfTwo:wn,floorPowerOfTwo:Tn,setQuaternionFromProperEuler:En,normalize:On,denormalize:Dn},I=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=cn(this.x,e.x,t.x),this.y=cn(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=cn(this.x,e,t),this.y=cn(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(cn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},An=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:P(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=cn(this.x,e.x,t.x),this.y=cn(this.y,e.y,t.y),this.z=cn(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=cn(this.x,e,t),this.y=cn(this.y,e,t),this.z=cn(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(cn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jn.copy(this).projectOnVector(e),this.sub(jn)}reflect(e){return this.sub(jn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jn=new L,Mn=new An,R=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Qt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Nn.makeScale(e,t)),this}rotate(e){return Qt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Nn.makeRotation(-e)),this}translate(e,t){return Qt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Nn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nn=new R,Pn=new R().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fn=new R().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function In(){let e={enabled:!0,workingColorSpace:zt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Rn(e.r),e.g=Rn(e.g),e.b=Rn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=zn(e.r),e.g=zn(e.g),e.b=zn(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Bt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Qt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Qt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[zt]:{primaries:t,whitePoint:r,transfer:Bt,toXYZ:Pn,fromXYZ:Fn,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:t,whitePoint:r,transfer:Vt,toXYZ:Pn,fromXYZ:Fn,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),e}var Ln=In();function Rn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function zn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Bn,Vn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bn===void 0&&(Bn=qt(`canvas`)),Bn.width=e.width,Bn.height=e.height;let t=Bn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Bn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=qt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Rn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Rn(t[e]/255)*255):t[e]=Rn(t[e]);return{data:t,width:e.width,height:e.height}}return P(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Hn=0,Un=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hn++}),this.uuid=sn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Wn(r[t].image)):e.push(Wn(r[t]))}else e=Wn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Wn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Vn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(P(`Texture: Unable to serialize Texture.`),{})}var Gn=0,Kn=new L,qn=class e extends tn{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=be,i=be,a=Te,o=De,s=Be,c=Oe,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gn++}),this.uuid=sn(),this.name=``,this.source=new Un(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new I(0,0),this.repeat=new I(1,1),this.center=new I(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new R,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kn).x}get height(){return this.source.getSize(Kn).y}get depth(){return this.source.getSize(Kn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){P(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?P(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ye:e.x-=Math.floor(e.x);break;case be:e.x=e.x<0?0:1;break;case xe:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ye:e.y-=Math.floor(e.y);break;case be:e.y=e.y<0?0:1;break;case xe:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null,qn.DEFAULT_MAPPING=300,qn.DEFAULT_ANISOTROPY=1;var Jn=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=cn(this.x,e.x,t.x),this.y=cn(this.y,e.y,t.y),this.z=cn(this.z,e.z,t.z),this.w=cn(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=cn(this.x,e,t),this.y=cn(this.y,e,t),this.z=cn(this.z,e,t),this.w=cn(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(cn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yn=class extends tn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Te,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Jn(0,0,e,t),this.scissorTest=!1,this.viewport=new Jn(0,0,e,t),this.textures=[];let r=new qn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Te,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Un(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Xn=class extends Yn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zn=class extends qn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Se,this.minFilter=Se,this.wrapR=be,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Qn=class extends qn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Se,this.minFilter=Se,this.wrapR=be,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},$n=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/er.setFromMatrixColumn(e,0).length(),i=1/er.setFromMatrixColumn(e,1).length(),a=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nr,e,rr)}lookAt(e,t,n){let r=this.elements;return or.subVectors(e,t),or.lengthSq()===0&&(or.z=1),or.normalize(),ir.crossVectors(n,or),ir.lengthSq()===0&&(Math.abs(n.z)===1?or.x+=1e-4:or.z+=1e-4,or.normalize(),ir.crossVectors(n,or)),ir.normalize(),ar.crossVectors(or,ir),r[0]=ir.x,r[4]=ar.x,r[8]=or.x,r[1]=ir.y,r[5]=ar.y,r[9]=or.y,r[2]=ir.z,r[6]=ar.z,r[10]=or.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],ne=r[14],A=r[3],re=r[7],ie=r[11],ae=r[15];return i[0]=a*x+o*T+s*ee+c*A,i[4]=a*S+o*E+s*k+c*re,i[8]=a*C+o*D+s*te+c*ie,i[12]=a*w+o*O+s*ne+c*ae,i[1]=l*x+u*T+d*ee+f*A,i[5]=l*S+u*E+d*k+f*re,i[9]=l*C+u*D+d*te+f*ie,i[13]=l*w+u*O+d*ne+f*ae,i[2]=p*x+m*T+h*ee+g*A,i[6]=p*S+m*E+h*k+g*re,i[10]=p*C+m*D+h*te+g*ie,i[14]=p*w+m*O+h*ne+g*ae,i[3]=_*x+v*T+y*ee+b*A,i[7]=_*S+v*E+y*k+b*re,i[11]=_*C+v*D+y*te+b*ie,i[15]=_*w+v*O+y*ne+b*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=er.set(r[0],r[1],r[2]).length(),o=er.set(r[4],r[5],r[6]).length(),s=er.set(r[8],r[9],r[10]).length();i<0&&(a=-a),tr.copy(this);let c=1/a,l=1/o,u=1/s;return tr.elements[0]*=c,tr.elements[1]*=c,tr.elements[2]*=c,tr.elements[4]*=l,tr.elements[5]*=l,tr.elements[6]*=l,tr.elements[8]*=u,tr.elements[9]*=u,tr.elements[10]*=u,t.setFromRotationMatrix(tr),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Wt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Wt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},er=new L,tr=new $n,nr=new L(0,0,0),rr=new L(1,1,1),ir=new L,ar=new L,or=new L,sr=new $n,cr=new An,lr=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-cn(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(cn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(cn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:P(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cr.setFromEuler(this),this.setFromQuaternion(cr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};lr.DEFAULT_ORDER=`XYZ`;var ur=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},dr=0,fr=new L,pr=new An,mr=new $n,hr=new L,gr=new L,_r=new L,vr=new An,yr=new L(1,0,0),br=new L(0,1,0),xr=new L(0,0,1),Sr={type:`added`},Cr={type:`removed`},wr={type:`childadded`,child:null},Tr={type:`childremoved`,child:null},Er=class e extends tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dr++}),this.uuid=sn(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new L,n=new lr,r=new An,i=new L(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $n},normalMatrix:{value:new R}}),this.matrix=new $n,this.matrixWorld=new $n,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(yr,e)}rotateY(e){return this.rotateOnAxis(br,e)}rotateZ(e){return this.rotateOnAxis(xr,e)}translateOnAxis(e,t){return fr.copy(e).applyQuaternion(this.quaternion),this.position.add(fr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yr,e)}translateY(e){return this.translateOnAxis(br,e)}translateZ(e){return this.translateOnAxis(xr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(gr,hr,this.up):mr.lookAt(hr,gr,this.up),this.quaternion.setFromRotationMatrix(mr),r&&(mr.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(mr),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(F(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sr),wr.child=e,this.dispatchEvent(wr),wr.child=null):F(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cr),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sr),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,_r),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,vr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Er.DEFAULT_UP=new L(0,1,0),Er.DEFAULT_MATRIX_AUTO_UPDATE=!0,Er.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dr=class extends Er{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Or={type:`move`},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Or)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Dr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ar={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Nr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var z=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ln.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ln.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ln.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ln.workingColorSpace){if(e=ln(e,1),t=cn(t,0,1),n=cn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Nr(i,r,e+1/3),this.g=Nr(i,r,e),this.b=Nr(i,r,e-1/3)}return Ln.colorSpaceToWorking(this,r),this}setStyle(e,t=Rt){function n(t){t!==void 0&&parseFloat(t)<1&&P(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:P(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);P(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=Ar[e.toLowerCase()];return n===void 0?P(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Ln.workingToColorSpace(Pr.copy(this),e),Math.round(cn(Pr.r*255,0,255))*65536+Math.round(cn(Pr.g*255,0,255))*256+Math.round(cn(Pr.b*255,0,255))}getHexString(e=Rt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ln.workingColorSpace){Ln.workingToColorSpace(Pr.copy(this),t);let n=Pr.r,r=Pr.g,i=Pr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ln.workingColorSpace){return Ln.workingToColorSpace(Pr.copy(this),t),e.r=Pr.r,e.g=Pr.g,e.b=Pr.b,e}getStyle(e=Rt){Ln.workingToColorSpace(Pr.copy(this),e);let t=Pr.r,n=Pr.g,r=Pr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(jr),this.setHSL(jr.h+e,jr.s+t,jr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jr),e.getHSL(Mr);let n=fn(jr.h,Mr.h,t),r=fn(jr.s,Mr.s,t),i=fn(jr.l,Mr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pr=new z;z.NAMES=Ar;var Fr=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new z(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ir=class extends Er{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Lr=new L,Rr=new L,zr=new L,Br=new L,Vr=new L,Hr=new L,Ur=new L,Wr=new L,Gr=new L,Kr=new L,qr=new Jn,Jr=new Jn,Yr=new Jn,Xr=class e{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Lr.subVectors(e,t),r.cross(Lr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Lr.subVectors(r,t),Rr.subVectors(n,t),zr.subVectors(e,t);let a=Lr.dot(Lr),o=Lr.dot(Rr),s=Lr.dot(zr),c=Rr.dot(Rr),l=Rr.dot(zr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Br)!==null&&Br.x>=0&&Br.y>=0&&Br.x+Br.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Br)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Br.x),s.addScaledVector(a,Br.y),s.addScaledVector(o,Br.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return qr.setScalar(0),Jr.setScalar(0),Yr.setScalar(0),qr.fromBufferAttribute(e,t),Jr.fromBufferAttribute(e,n),Yr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qr,i.x),a.addScaledVector(Jr,i.y),a.addScaledVector(Yr,i.z),a}static isFrontFacing(e,t,n,r){return Lr.subVectors(n,t),Rr.subVectors(e,t),Lr.cross(Rr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lr.subVectors(this.c,this.b),Rr.subVectors(this.a,this.b),Lr.cross(Rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Vr.subVectors(r,n),Hr.subVectors(i,n),Wr.subVectors(e,n);let s=Vr.dot(Wr),c=Hr.dot(Wr);if(s<=0&&c<=0)return t.copy(n);Gr.subVectors(e,r);let l=Vr.dot(Gr),u=Hr.dot(Gr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Vr,a);Kr.subVectors(e,i);let f=Vr.dot(Kr),p=Hr.dot(Kr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Hr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Ur.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Ur,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Vr,a).addScaledVector(Hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zr=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($r.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($r.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$r.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,$r):$r.fromBufferAttribute(r,t),$r.applyMatrix4(e.matrixWorld),this.expandByPoint($r);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ei.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ei.copy(e.boundingBox)),ei.applyMatrix4(e.matrixWorld),this.union(ei)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$r),$r.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(si),ci.subVectors(this.max,si),ti.subVectors(e.a,si),ni.subVectors(e.b,si),ri.subVectors(e.c,si),ii.subVectors(ni,ti),ai.subVectors(ri,ni),oi.subVectors(ti,ri);let t=[0,-ii.z,ii.y,0,-ai.z,ai.y,0,-oi.z,oi.y,ii.z,0,-ii.x,ai.z,0,-ai.x,oi.z,0,-oi.x,-ii.y,ii.x,0,-ai.y,ai.x,0,-oi.y,oi.x,0];return!di(t,ti,ni,ri,ci)||(t=[1,0,0,0,1,0,0,0,1],!di(t,ti,ni,ri,ci))?!1:(li.crossVectors(ii,ai),t=[li.x,li.y,li.z],di(t,ti,ni,ri,ci))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$r).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($r).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Qr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qr=[new L,new L,new L,new L,new L,new L,new L,new L],$r=new L,ei=new Zr,ti=new L,ni=new L,ri=new L,ii=new L,ai=new L,oi=new L,si=new L,ci=new L,li=new L,ui=new L;function di(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ui.fromArray(e,a);let o=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),s=t.dot(ui),c=n.dot(ui),l=r.dot(ui);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var fi=new L,pi=new I,mi=0,hi=class extends tn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mi++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ut,this.updateRanges=[],this.gpuType=Ne,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyMatrix3(e),this.setXY(t,pi.x,pi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fi.fromBufferAttribute(this,t),fi.applyMatrix3(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fi.fromBufferAttribute(this,t),fi.applyMatrix4(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fi.fromBufferAttribute(this,t),fi.applyNormalMatrix(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fi.fromBufferAttribute(this,t),fi.transformDirection(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array),r=On(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array),r=On(r,this.array),i=On(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},gi=class extends hi{constructor(e,t,n){super(new Uint16Array(e),t,n)}},_i=class extends hi{constructor(e,t,n){super(new Uint32Array(e),t,n)}},B=class extends hi{constructor(e,t,n){super(new Float32Array(e),t,n)}},vi=new Zr,yi=new L,bi=new L,xi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?vi.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yi.subVectors(e,this.center);let t=yi.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(yi,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yi.copy(e.center).add(bi)),this.expandByPoint(yi.copy(e.center).sub(bi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Si=0,Ci=new $n,wi=new Er,Ti=new L,Ei=new Zr,Di=new Zr,Oi=new L,ki=class e extends tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Si++}),this.uuid=sn(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Gt(e)?_i:gi)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new R().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,n){return Ci.makeTranslation(e,t,n),this.applyMatrix4(Ci),this}scale(e,t,n){return Ci.makeScale(e,t,n),this.applyMatrix4(Ci),this}lookAt(e){return wi.lookAt(e),wi.updateMatrix(),this.applyMatrix4(wi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new B(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&P(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)F(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ei.setFromBufferAttribute(n),this.morphTargetsRelative?(Oi.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Oi),Oi.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Oi)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&F(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)F(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new L,1/0);else if(e){let n=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Di.setFromBufferAttribute(n),this.morphTargetsRelative?(Oi.addVectors(Ei.min,Di.min),Ei.expandByPoint(Oi),Oi.addVectors(Ei.max,Di.max),Ei.expandByPoint(Oi)):(Ei.expandByPoint(Di.min),Ei.expandByPoint(Di.max))}Ei.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Oi.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Oi));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Oi.fromBufferAttribute(a,t),o&&(Ti.fromBufferAttribute(e,t),Oi.add(Ti)),r=Math.max(r,n.distanceToSquared(Oi))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&F(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){F(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new hi(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new L,s[e]=new L;let c=new L,l=new L,u=new L,d=new I,f=new I,p=new I,m=new L,h=new L;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new L,y=new L,b=new L,x=new L;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new hi(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new L,i=new L,a=new L,o=new L,s=new L,c=new L,l=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Oi.fromBufferAttribute(e,t),Oi.normalize(),e.setXYZ(t,Oi.x,Oi.y,Oi.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new hi(a,r,i)}if(this.index===null)return P(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ai=new L,ji=new L,Mi=new R,Ni=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ai.subVectors(n,t).cross(ji.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ai),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mi.getNormalMatrix(e),r=this.coplanarPoint(Ai).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Pi=0,Fi=class extends tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pi++}),this.uuid=sn(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new z(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ht,this.stencilZFail=Ht,this.stencilZPass=Ht,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){P(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?P(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new z().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ni().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new I().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new I().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ii=new L,Li=new L,Ri=new L,zi=new L,Bi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Li.copy(e).add(t).multiplyScalar(.5),Ri.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Li);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ri),o=zi.dot(this.direction),s=-zi.dot(Ri),c=zi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Li).addScaledVector(Ri,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ii.subVectors(e.center,this.origin);let n=Ii.dot(this.direction),r=Ii.dot(Ii)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,k,te,ne,A;if(y>=b&&y>=x?(w=s,D=u,k=p,A=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,te=_,ne=v):(S=l,C=c,T=f,E=d,O=h,ee=m,te=v,ne=_)):b>=x?(w=c,D=d,k=m,A=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,te=v,ne=g):(S=s,C=l,T=u,E=f,O=p,ee=h,te=g,ne=v)):(w=l,D=f,k=h,A=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,te=g,ne=_):(S=c,C=s,T=d,E=u,O=m,ee=p,te=_,ne=g)),w===0)return null;let re=S/w,ie=C/w,ae=1/w,oe=T-re*D,se=E-ie*D,ce=O-re*k,le=ee-ie*k,ue=te-re*A,de=ne-ie*A,fe=ue*le-de*ce,pe=oe*de-se*ue,me=ce*se-le*oe;if(r){if(fe<0||pe<0||me<0)return null}else if((fe<0||pe<0||me<0)&&(fe>0||pe>0||me>0))return null;let he=fe+pe+me;if(he===0)return null;let ge=ae*(fe*D+pe*k+me*A);return(he>0?ge<0:ge>0)?null:this.at(ge/he,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vi=class extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Hi=new $n,Ui=new Bi,Wi=new xi,Gi=new L,Ki=new L,qi=new L,Ji=new L,Yi=new L,Xi=new L,Zi=new L,Qi=new L,V=class extends Er{constructor(e=new ki,t=new Vi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Xi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Yi.fromBufferAttribute(s,e),a?Xi.addScaledVector(Yi,r):Xi.addScaledVector(Yi.sub(t),r))}t.add(Xi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(i),Ui.copy(e.ray).recast(e.near),Wi.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Wi,Gi)===null||Ui.origin.distanceToSquared(Gi)>(e.far-e.near)**2)||(Hi.copy(i).invert(),Ui.copy(e.ray).applyMatrix4(Hi),(n.boundingBox===null||Ui.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ea(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ea(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ea(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ea(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function $i(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Qi.copy(s),Qi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Qi);return l<n.near||l>n.far?null:{distance:l,point:Qi.clone(),object:e}}function ea(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ki),e.getVertexPosition(c,qi),e.getVertexPosition(l,Ji);let u=$i(e,t,n,r,Ki,qi,Ji,Zi);if(u){let e=new L;Xr.getBarycoord(Zi,Ki,qi,Ji,e),i&&(u.uv=Xr.getInterpolatedAttribute(i,s,c,l,e,new I)),a&&(u.uv1=Xr.getInterpolatedAttribute(a,s,c,l,e,new I)),o&&(u.normal=Xr.getInterpolatedAttribute(o,s,c,l,e,new L),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new L,materialIndex:0};Xr.getNormal(Ki,qi,Ji,t.normal),u.face=t,u.barycoord=e}return u}var ta=class extends qn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Se,l=Se,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},na=class extends hi{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ra=new $n,ia=new $n,aa=[],oa=new Zr,sa=new $n,ca=new V,la=new xi,ua=class extends V{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new na(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,sa)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ra),oa.copy(e.boundingBox).applyMatrix4(ra),this.boundingBox.union(oa)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ra),la.copy(e.boundingSphere).applyMatrix4(ra),this.boundingSphere.union(la)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),la.copy(this.boundingSphere),la.applyMatrix4(n),e.ray.intersectsSphere(la)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ra),ia.multiplyMatrices(n,ra),ca.matrixWorld=ia,ca.raycast(e,aa);for(let e=0,n=aa.length;e<n;e++){let n=aa[e];n.instanceId=i,n.object=this,t.push(n)}aa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new na(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ta(new Float32Array(r*this.count),r,this.count,Ue,Ne));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},da=new xi,fa=new I(.5,.5),pa=new L,ma=class{constructor(e=new Ni,t=new Ni,n=new Ni,r=new Ni,i=new Ni,a=new Ni){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),da.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),da.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(da)}intersectsSprite(e){return da.center.set(0,0,0),da.radius=.7071067811865476+fa.distanceTo(e.center),da.applyMatrix4(e.matrixWorld),this.intersectsSphere(da)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(pa.x=r.normal.x>0?e.max.x:e.min.x,pa.y=r.normal.y>0?e.max.y:e.min.y,pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ha=class extends Fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new z(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ga=new L,_a=new L,va=new $n,ya=new Bi,ba=new xi,xa=new L,Sa=new L,Ca=class extends Er{constructor(e=new ki,t=new ha){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ga.fromBufferAttribute(t,e-1),_a.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ga.distanceTo(_a);e.setAttribute(`lineDistance`,new B(n,1))}else P(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(r),ba.radius+=i,e.ray.intersectsSphere(ba)===!1)return;va.copy(r).invert(),ya.copy(e.ray).applyMatrix4(va);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=wa(this,e,ya,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=wa(this,e,ya,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=wa(this,e,ya,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=wa(this,e,ya,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function wa(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(ga.fromBufferAttribute(s,i),_a.fromBufferAttribute(s,a),n.distanceSqToSegment(ga,_a,xa,Sa)>r)return;xa.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(xa);if(!(c<t.near||c>t.far))return{distance:c,point:Sa.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ta=new L,Ea=new L,Da=class extends Ca{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Ta.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Ta.distanceTo(Ea);e.setAttribute(`lineDistance`,new B(n,1))}else P(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Oa=class extends Fi{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new z(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ka=new $n,Aa=new Bi,ja=new xi,Ma=new L,Na=class extends Er{constructor(e=new ki,t=new Oa){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(r),ja.radius+=i,e.ray.intersectsSphere(ja)===!1)return;ka.copy(r).invert(),Aa.copy(e.ray).applyMatrix4(ka);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ma.fromBufferAttribute(l,n),Pa(Ma,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ma.fromBufferAttribute(l,a),Pa(Ma,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Pa(e,t,n,r,i,a,o){let s=Aa.distanceSqToPoint(e);if(s<n){let n=new L;Aa.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Fa=class extends qn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ia=class extends qn{constructor(e,t,n=Me,r,i,a,o=Se,s=Se,c,l=Ve,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Un(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},La=class extends Ia{constructor(e,t=Me,n=301,r,i,a=Se,o=Se,s,c=Ve){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ra=class extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},za=class e extends ki{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new B(c,3)),this.setAttribute(`normal`,new B(l,3)),this.setAttribute(`uv`,new B(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new L;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ba=class e extends ki{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new L,l=new I;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new B(a,3)),this.setAttribute(`normal`,new B(o,3)),this.setAttribute(`uv`,new B(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Va=class e extends ki{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new B(u,3)),this.setAttribute(`normal`,new B(d,3)),this.setAttribute(`uv`,new B(f,2));function _(){let a=new L,_=new L,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new I,m=new L,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ha=class e extends Va{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ua=class e extends ki{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new B(i,3)),this.setAttribute(`normal`,new B(i.slice(),3)),this.setAttribute(`uv`,new B(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new L,r=new L,i=new L;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new L;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new L;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new L,t=new L,n=new L,r=new L,o=new I,s=new I,c=new I;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Wa=class e extends Ua{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ga=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){P(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new I:new L);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,r=[],i=[],a=[],o=new L,s=new $n;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new L)}i[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(cn(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(cn(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ka=class extends Ga{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new I){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},qa=class extends Ka{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ja(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ya=new L,Xa=new L,Za=new Ja,Qa=new Ja,$a=new Ja,eo=class extends Ga{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Xa.subVectors(r[0],r[1]).add(r[0]),c=Xa);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ya.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ya),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Za.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Qa.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),$a.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Za.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Qa.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),$a.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Za.calc(s),Qa.calc(s),$a.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new L().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function to(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function no(e,t){let n=1-e;return n*n*t}function ro(e,t){return 2*(1-e)*e*t}function io(e,t){return e*e*t}function ao(e,t,n,r){return no(e,t)+ro(e,n)+io(e,r)}function oo(e,t){let n=1-e;return n*n*n*t}function so(e,t){let n=1-e;return 3*n*n*e*t}function co(e,t){return 3*(1-e)*e*e*t}function lo(e,t){return e*e*e*t}function uo(e,t,n,r,i){return oo(e,t)+so(e,n)+co(e,r)+lo(e,i)}var fo=class extends Ga{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(uo(e,r.x,i.x,a.x,o.x),uo(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},po=class extends Ga{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(uo(e,r.x,i.x,a.x,o.x),uo(e,r.y,i.y,a.y,o.y),uo(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mo=class extends Ga{constructor(e=new I,t=new I){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ho=class extends Ga{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends Ga{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ao(e,r.x,i.x,a.x),ao(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends Ga{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ao(e,r.x,i.x,a.x),ao(e,r.y,i.y,a.y),ao(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vo=Object.freeze({__proto__:null,ArcCurve:qa,CatmullRomCurve3:eo,CubicBezierCurve:fo,CubicBezierCurve3:po,EllipseCurve:Ka,LineCurve:mo,LineCurve3:ho,QuadraticBezierCurve:go,QuadraticBezierCurve3:_o,SplineCurve:class extends Ga{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new I){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(to(o,s.x,c.x,l.x,u.x),to(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new I().fromArray(n))}return this}}}),yo=class e extends Ua{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},bo=class e extends ki{constructor(e=[new I(0,-.5),new I(.5,0),new I(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=cn(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new L,d=new I,f=new L,p=new L,m=new L,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new B(a,3)),this.setAttribute(`uv`,new B(o,2)),this.setAttribute(`normal`,new B(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},xo=class e extends Ua{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},So=class e extends ki{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new B(p,3)),this.setAttribute(`normal`,new B(m,3)),this.setAttribute(`uv`,new B(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Co=class e extends ki{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new L,p=new I;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new B(s,3)),this.setAttribute(`normal`,new B(c,3)),this.setAttribute(`uv`,new B(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},wo=class e extends ki{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new L,d=new L,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new B(p,3)),this.setAttribute(`normal`,new B(m,3)),this.setAttribute(`uv`,new B(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},To=class e extends Ua{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type=`TetrahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Eo=class e extends ki{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new L,f=new L,p=new L;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new B(c,3)),this.setAttribute(`normal`,new B(l,3)),this.setAttribute(`uv`,new B(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Do=class e extends ki{constructor(e=new _o(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,s=new L,c=new I,l=new L,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new B(u,3)),this.setAttribute(`normal`,new B(d,3)),this.setAttribute(`uv`,new B(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new vo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Oo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ao(i))i.isRenderTargetTexture?(P(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ao(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ko(e){let t={};for(let n=0;n<e.length;n++){let r=Oo(e[n]);for(let e in r)t[e]=r[e]}return t}function Ao(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function jo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Mo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ln.workingColorSpace}var No={clone:Oo,merge:ko},Po=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Io=class extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Po,this.fragmentShader=Fo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=jo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new z().setHex(r.value);break;case`v2`:this.uniforms[n].value=new I().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new L().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Jn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new R().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new $n().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Lo=class extends Io{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ro=class extends Fi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zo=class extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Lt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bo=class extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Vo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ho(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Uo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Wo=class extends Uo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pt,endingEnd:Pt}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ft:i=e,o=2*t-n;break;case It:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ft:a=e,s=2*n-t;break;case It:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Go=class extends Uo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ko=class extends Uo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qo=class extends Uo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Xo(n,t,g,y,r);i[p]=Jo(x,o,_,b,m)}return i}};function Jo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Yo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Xo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Jo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Yo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Zo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Vo(t,this.TimeBufferType),this.values=Vo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vo(e.times,Array),values:Vo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ho(e.settings)&&(n.settings={inTangents:Vo(e.settings.inTangents,Array),outTangents:Vo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case At:t=this.InterpolantFactoryMethodDiscrete;break;case jt:t=this.InterpolantFactoryMethodLinear;break;case Mt:t=this.InterpolantFactoryMethodSmooth;break;case Nt:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return P(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return At;case this.InterpolantFactoryMethodLinear:return jt;case this.InterpolantFactoryMethodSmooth:return Mt;case this.InterpolantFactoryMethodBezier:return Nt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ho(this.settings)&&(Qo(this.settings.inTangents,e),Qo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(F(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(F(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){F(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){F(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Kt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){F(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Mt,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ho(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Qo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Zo.prototype.ValueTypeName=``,Zo.prototype.TimeBufferType=Float32Array,Zo.prototype.ValueBufferType=Float32Array,Zo.prototype.DefaultInterpolation=jt;var $o=class extends Zo{constructor(e,t,n){super(e,t,n)}};$o.prototype.ValueTypeName=`bool`,$o.prototype.ValueBufferType=Array,$o.prototype.DefaultInterpolation=At,$o.prototype.InterpolantFactoryMethodLinear=void 0,$o.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Zo{constructor(e,t,n,r){super(e,t,n,r)}};es.prototype.ValueTypeName=`color`;var ts=class extends Zo{constructor(e,t,n,r){super(e,t,n,r)}};ts.prototype.ValueTypeName=`number`;var ns=class extends Uo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)An.slerpFlat(i,0,a,c-o,a,c,s);return i}},rs=class extends Zo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ns(this.times,this.values,this.getValueSize(),e)}};rs.prototype.ValueTypeName=`quaternion`,rs.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Zo{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName=`string`,is.prototype.ValueBufferType=Array,is.prototype.DefaultInterpolation=At,is.prototype.InterpolantFactoryMethodLinear=void 0,is.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Zo{constructor(e,t,n,r){super(e,t,n,r)}};as.prototype.ValueTypeName=`vector`;var os=class extends Er{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new z(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ss=class extends os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Er.DEFAULT_UP),this.updateMatrix(),this.groundColor=new z(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},cs=new $n,ls=new L,us=new L,ds=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new I(512,512),this.mapType=Oe,this.map=null,this.mapPass=null,this.matrix=new $n,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new I(1,1),this._viewportCount=1,this._viewports=[new Jn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ls.setFromMatrixPosition(e.matrixWorld),t.position.copy(ls),us.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(us),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){cs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(cs,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(cs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fs=new L,ps=new An,ms=new L,hs=class extends Er{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new $n,this.projectionMatrix=new $n,this.projectionMatrixInverse=new $n,this.coordinateSystem=Wt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fs,ps,ms),ms.x===1&&ms.y===1&&ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fs,ps,ms.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fs,ps,ms),ms.x===1&&ms.y===1&&ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fs,ps,ms.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gs=new L,_s=new I,vs=new I,ys=class extends hs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=on*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(an*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return on*2*Math.atan(Math.tan(an*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,_s,vs),t.subVectors(vs,_s)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(an*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bs=class extends hs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xs=class extends ds{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ss=class extends os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Er.DEFAULT_UP),this.updateMatrix(),this.target=new Er,this.shadow=new xs}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Cs=-90,ws=1,Ts=class extends Er{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ys(Cs,ws,e,t);r.layers=this.layers,this.add(r);let i=new ys(Cs,ws,e,t);i.layers=this.layers,this.add(i);let a=new ys(Cs,ws,e,t);a.layers=this.layers,this.add(a);let o=new ys(Cs,ws,e,t);o.layers=this.layers,this.add(o);let s=new ys(Cs,ws,e,t);s.layers=this.layers,this.add(s);let c=new ys(Cs,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Es=class extends ys{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ds=`\\[\\]\\.:\\/`,Os=RegExp(`[\\[\\]\\.:\\/]`,`g`),ks=`[^\\[\\]\\.:\\/]`,As=`[^`+Ds.replace(`\\.`,``)+`]`,js=`((?:WC+[\\/:])*)`.replace(`WC`,ks),Ms=`(WCOD+)?`.replace(`WCOD`,As),Ns=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ks),Ps=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ks),Fs=RegExp(`^`+js+Ms+Ns+Ps+`$`),Is=[`material`,`materials`,`bones`,`map`],Ls=class{constructor(e,t,n){let r=n||Rs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Os,``)}static parseTrackName(e){let t=Fs.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Is.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){P(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){F(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){F(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){F(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){F(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){F(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){F(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){F(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;F(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){F(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){F(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rs.Composite=Ls,Rs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Rs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Rs.prototype.GetterByBindingType=[Rs.prototype._getValue_direct,Rs.prototype._getValue_array,Rs.prototype._getValue_arrayElement,Rs.prototype._getValue_toArray],Rs.prototype.SetterByBindingTypeAndVersioning=[[Rs.prototype._setValue_direct,Rs.prototype._setValue_direct_setNeedsUpdate,Rs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rs.prototype._setValue_array,Rs.prototype._setValue_array_setNeedsUpdate,Rs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rs.prototype._setValue_arrayElement,Rs.prototype._setValue_arrayElement_setNeedsUpdate,Rs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rs.prototype._setValue_fromArray,Rs.prototype._setValue_fromArray_setNeedsUpdate,Rs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zs=new $n,Bs=class{constructor(e,t,n=0,r=1/0){this.ray=new Bi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):F(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return zs.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zs),this}intersectObject(e,t=!0,n=[]){return Hs(e,this,n,t),n.sort(Vs),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Hs(e[r],this,n,t);return n.sort(Vs),n}};function Vs(e,t){return e.distance-t.distance}function Hs(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Hs(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Us(e,t,n,r){let i=Ws(r);switch(n){case N:return e*t;case Ue:return e*t/i.components*i.byteLength;case We:return e*t/i.components*i.byteLength;case Ge:return e*t*2/i.components*i.byteLength;case Ke:return e*t*2/i.components*i.byteLength;case ze:return e*t*3/i.components*i.byteLength;case Be:return e*t*4/i.components*i.byteLength;case qe:return e*t*4/i.components*i.byteLength;case Je:case Ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Xe:case Ze:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case $e:case tt:return Math.max(e,16)*Math.max(t,8)/4;case Qe:case et:return Math.max(e,8)*Math.max(t,8)/2;case nt:case rt:case at:case ot:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case it:case st:case ct:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case lt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ut:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case dt:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ft:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case pt:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case mt:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ht:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case gt:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case _t:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case vt:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case yt:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case bt:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xt:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case St:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ct:case wt:case Tt:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Et:case Dt:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ot:case kt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ws(e){switch(e){case Oe:case j:return{byteLength:1,components:1};case Ae:case ke:case Pe:return{byteLength:2,components:1};case Fe:case Ie:return{byteLength:2,components:4};case Me:case je:case Ne:return{byteLength:4,components:1};case M:case Re:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?P(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Gs(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ks(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var qs={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},H={common:{diffuse:{value:new z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new R}},envmap:{envMap:{value:null},envMapRotation:{value:new R},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new R}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new R}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new R},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new R},normalScale:{value:new I(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new R},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new R}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new R}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new R}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0},uvTransform:{value:new R}},sprite:{diffuse:{value:new z(16777215)},opacity:{value:1},center:{value:new I(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}}},Js={basic:{uniforms:ko([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.fog]),vertexShader:qs.meshbasic_vert,fragmentShader:qs.meshbasic_frag},lambert:{uniforms:ko([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.fog,H.lights,{emissive:{value:new z(0)},envMapIntensity:{value:1}}]),vertexShader:qs.meshlambert_vert,fragmentShader:qs.meshlambert_frag},phong:{uniforms:ko([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.fog,H.lights,{emissive:{value:new z(0)},specular:{value:new z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qs.meshphong_vert,fragmentShader:qs.meshphong_frag},standard:{uniforms:ko([H.common,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.roughnessmap,H.metalnessmap,H.fog,H.lights,{emissive:{value:new z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qs.meshphysical_vert,fragmentShader:qs.meshphysical_frag},toon:{uniforms:ko([H.common,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.gradientmap,H.fog,H.lights,{emissive:{value:new z(0)}}]),vertexShader:qs.meshtoon_vert,fragmentShader:qs.meshtoon_frag},matcap:{uniforms:ko([H.common,H.bumpmap,H.normalmap,H.displacementmap,H.fog,{matcap:{value:null}}]),vertexShader:qs.meshmatcap_vert,fragmentShader:qs.meshmatcap_frag},points:{uniforms:ko([H.points,H.fog]),vertexShader:qs.points_vert,fragmentShader:qs.points_frag},dashed:{uniforms:ko([H.common,H.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qs.linedashed_vert,fragmentShader:qs.linedashed_frag},depth:{uniforms:ko([H.common,H.displacementmap]),vertexShader:qs.depth_vert,fragmentShader:qs.depth_frag},normal:{uniforms:ko([H.common,H.bumpmap,H.normalmap,H.displacementmap,{opacity:{value:1}}]),vertexShader:qs.meshnormal_vert,fragmentShader:qs.meshnormal_frag},sprite:{uniforms:ko([H.sprite,H.fog]),vertexShader:qs.sprite_vert,fragmentShader:qs.sprite_frag},background:{uniforms:{uvTransform:{value:new R},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qs.background_vert,fragmentShader:qs.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new R}},vertexShader:qs.backgroundCube_vert,fragmentShader:qs.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qs.cube_vert,fragmentShader:qs.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qs.equirect_vert,fragmentShader:qs.equirect_frag},distance:{uniforms:ko([H.common,H.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qs.distance_vert,fragmentShader:qs.distance_frag},shadow:{uniforms:ko([H.lights,H.fog,{color:{value:new z(0)},opacity:{value:1}}]),vertexShader:qs.shadow_vert,fragmentShader:qs.shadow_frag}};Js.physical={uniforms:ko([Js.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new R},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new R},clearcoatNormalScale:{value:new I(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new R},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new R},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new R},sheen:{value:0},sheenColor:{value:new z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new R},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new R},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new R},transmissionSamplerSize:{value:new I},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new R},attenuationDistance:{value:0},attenuationColor:{value:new z(0)},specularColor:{value:new z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new R},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new R},anisotropyVector:{value:new I},anisotropyMap:{value:null},anisotropyMapTransform:{value:new R}}]),vertexShader:qs.meshphysical_vert,fragmentShader:qs.meshphysical_frag};var Ys={r:0,b:0,g:0},Xs=new $n,Zs=new R;Zs.set(-1,0,0,0,1,0,0,0,1);function Qs(e,t,n,r,i,a){let o=new z(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new V(new za(1,1,1),new Io({name:`BackgroundCubeMaterial`,uniforms:Oo(Js.backgroundCube.uniforms),vertexShader:Js.backgroundCube.vertexShader,fragmentShader:Js.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Xs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zs),l.material.toneMapped=Ln.getTransfer(i.colorSpace)!==Vt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new V(new So(2,2),new Io({name:`BackgroundMaterial`,uniforms:Oo(Js.background.uniforms),vertexShader:Js.background.vertexShader,fragmentShader:Js.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ln.getTransfer(i.colorSpace)!==Vt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ys,Mo(e)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function $s(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ec(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function tc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(P(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&P(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function nc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ni,s=new R,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var rc=4,ic=6,ac=20,oc=256,sc=new bs,cc=new z,lc=null,uc=0,dc=0,fc=!1,pc=new L,mc=new L,hc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=pc}=i;lc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,uc,dc),this._renderer.xr.enabled=fc,e.scissorTest=!1,vc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Te,minFilter:Te,generateMipmaps:!1,type:Pe,format:Be,colorSpace:zt,depthBuffer:!1},r=_c(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gc(r)),this._blurMaterial=bc(r,e,t),this._ggxMaterial=yc(r,e,t)}return r}_compileMaterial(e){let t=new V(new ki,e);this._renderer.compile(t,sc)}_sceneToCubeUV(e,t,n,r,i){let a=new ys(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(cc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new V(new za,new Vi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(cc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;vc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;vc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,sc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-rc?n-d+rc:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,vc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,sc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,vc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,sc)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];vc(t,3*l*(r>this._lodMax-rc?r-this._lodMax+rc:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,sc)}};function gc(e){let t=[],n=[],r=e,i=e-rc+1+ic;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?mc.set(1,r,n):e===1?mc.set(-n,1,-r):e===2?mc.set(-n,r,1):e===3?mc.set(-1,r,-n):e===4?mc.set(-n,-1,r):mc.set(n,r,-1),mc.toArray(l,(e*6+t)*3)}}let u=new ki;u.setAttribute(`position`,new hi(c,3)),u.setAttribute(`outputDirection`,new hi(l,3)),n.push(new V(u,null)),r>rc&&r--}return{lodMeshes:n,sizeLods:t}}function _c(e,t,n){let r=new Xn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function vc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function yc(e,t,n){return new Io({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:oc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bc(e,t,n){return new Io({name:`SphericalGaussianBlur`,defines:{SAMPLES:ac,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xc(){return new Io({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sc(){return new Io({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var wc=class extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Fa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new za(5,5,5),i=new Io({name:`CubemapFromEquirect`,uniforms:Oo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new V(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Te),new Ts(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Tc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new wc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new hc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new hc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ec(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Qt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Dc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?_i:gi)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Oc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function kc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:F(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ac(e,t,n){let r=new WeakMap,i=new Jn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Zn(h,p,m,u);g.type=Ne,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new I(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function jc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Mc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Nc(e,t,n,r,i,a){let o=new Xn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new ki;l.setAttribute(`position`,new B([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new B([0,2,0,0,2,0],2));let u=new Lo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new V(l,u),f=new bs(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Xn(t,n,{type:Pe,depthBuffer:!1,stencilBuffer:!1}),c=new Xn(t,n,{type:Pe,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Ln.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Mc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Pc=new qn,Fc=new Ia(1,1),Ic=new Zn,Lc=new Qn,Rc=new Fa,zc=[],Bc=[],Vc=new Float32Array(16),Hc=new Float32Array(9),Uc=new Float32Array(4);function Wc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=zc[i];if(a===void 0&&(a=new Float32Array(i),zc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Gc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Kc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function qc(e,t){let n=Bc[t];n===void 0&&(n=new Int32Array(t),Bc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Jc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gc(n,t))return;e.uniform2fv(this.addr,t),Kc(n,t)}}function Xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Gc(n,t))return;e.uniform3fv(this.addr,t),Kc(n,t)}}function Zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gc(n,t))return;e.uniform4fv(this.addr,t),Kc(n,t)}}function Qc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Kc(n,t)}else{if(Gc(n,r))return;Uc.set(r),e.uniformMatrix2fv(this.addr,!1,Uc),Kc(n,r)}}function $c(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Kc(n,t)}else{if(Gc(n,r))return;Hc.set(r),e.uniformMatrix3fv(this.addr,!1,Hc),Kc(n,r)}}function el(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Kc(n,t)}else{if(Gc(n,r))return;Vc.set(r),e.uniformMatrix4fv(this.addr,!1,Vc),Kc(n,r)}}function tl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function nl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gc(n,t))return;e.uniform2iv(this.addr,t),Kc(n,t)}}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Gc(n,t))return;e.uniform3iv(this.addr,t),Kc(n,t)}}function il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gc(n,t))return;e.uniform4iv(this.addr,t),Kc(n,t)}}function al(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gc(n,t))return;e.uniform2uiv(this.addr,t),Kc(n,t)}}function sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Gc(n,t))return;e.uniform3uiv(this.addr,t),Kc(n,t)}}function cl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gc(n,t))return;e.uniform4uiv(this.addr,t),Kc(n,t)}}function ll(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Fc.compareFunction=n.isReversedDepthBuffer()?518:515,a=Fc):a=Pc,n.setTexture2D(t||a,i)}function ul(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Lc,i)}function dl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Rc,i)}function fl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ic,i)}function pl(e){switch(e){case 5126:return Jc;case 35664:return Yc;case 35665:return Xc;case 35666:return Zc;case 35674:return Qc;case 35675:return $c;case 35676:return el;case 5124:case 35670:return tl;case 35667:case 35671:return nl;case 35668:case 35672:return rl;case 35669:case 35673:return il;case 5125:return al;case 36294:return ol;case 36295:return sl;case 36296:return cl;case 35678:case 36198:case 36298:case 36306:case 35682:return ll;case 35679:case 36299:case 36307:return ul;case 35680:case 36300:case 36308:case 36293:return dl;case 36289:case 36303:case 36311:case 36292:return fl}}function ml(e,t){e.uniform1fv(this.addr,t)}function hl(e,t){let n=Wc(t,this.size,2);e.uniform2fv(this.addr,n)}function gl(e,t){let n=Wc(t,this.size,3);e.uniform3fv(this.addr,n)}function _l(e,t){let n=Wc(t,this.size,4);e.uniform4fv(this.addr,n)}function vl(e,t){let n=Wc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function yl(e,t){let n=Wc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function bl(e,t){let n=Wc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function xl(e,t){e.uniform1iv(this.addr,t)}function Sl(e,t){e.uniform2iv(this.addr,t)}function Cl(e,t){e.uniform3iv(this.addr,t)}function wl(e,t){e.uniform4iv(this.addr,t)}function Tl(e,t){e.uniform1uiv(this.addr,t)}function El(e,t){e.uniform2uiv(this.addr,t)}function Dl(e,t){e.uniform3uiv(this.addr,t)}function Ol(e,t){e.uniform4uiv(this.addr,t)}function kl(e,t,n){let r=this.cache,i=t.length,a=qc(n,i);Gc(r,a)||(e.uniform1iv(this.addr,a),Kc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Fc:Pc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Al(e,t,n){let r=this.cache,i=t.length,a=qc(n,i);Gc(r,a)||(e.uniform1iv(this.addr,a),Kc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Lc,a[e])}function jl(e,t,n){let r=this.cache,i=t.length,a=qc(n,i);Gc(r,a)||(e.uniform1iv(this.addr,a),Kc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Rc,a[e])}function Ml(e,t,n){let r=this.cache,i=t.length,a=qc(n,i);Gc(r,a)||(e.uniform1iv(this.addr,a),Kc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ic,a[e])}function Nl(e){switch(e){case 5126:return ml;case 35664:return hl;case 35665:return gl;case 35666:return _l;case 35674:return vl;case 35675:return yl;case 35676:return bl;case 5124:case 35670:return xl;case 35667:case 35671:return Sl;case 35668:case 35672:return Cl;case 35669:case 35673:return wl;case 5125:return Tl;case 36294:return El;case 36295:return Dl;case 36296:return Ol;case 35678:case 36198:case 36298:case 36306:case 35682:return kl;case 35679:case 36299:case 36307:return Al;case 35680:case 36300:case 36308:case 36293:return jl;case 36289:case 36303:case 36311:case 36292:return Ml}}var Pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pl(t.type)}},Fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nl(t.type)}},Il=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function Rl(e,t){e.seq.push(t),e.map[t.id]=t}function zl(e,t,n){let r=e.name,i=r.length;for(Ll.lastIndex=0;;){let a=Ll.exec(r),o=Ll.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Rl(n,l===void 0?new Pl(s,e,t):new Fl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Il(s),Rl(n,e)),n=e}}}var Bl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);zl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Vl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Hl=37297,Ul=0;function Wl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Gl=new R;function Kl(e){Ln._getMatrix(Gl,Ln.workingColorSpace,e);let t=`mat3( ${Gl.elements.map(e=>e.toFixed(4))} )`;switch(Ln.getTransfer(e)){case Bt:return[t,`LinearTransferOETF`];case Vt:return[t,`sRGBTransferOETF`];default:return P(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ql(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Wl(e.getShaderSource(t),r)}return i}function Jl(e,t){let n=Kl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Yl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Xl(e,t){let n=Yl[t];return n===void 0?(P(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Zl=new L;function Ql(){return Ln.getLuminanceCoefficients(Zl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Zl.x.toFixed(4)}, ${Zl.y.toFixed(4)}, ${Zl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function $l(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(nu).join(`
`)}function eu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function tu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function nu(e){return e!==``}function ru(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var au=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(e){return e.replace(au,cu)}var su=new Map;function cu(e,t){let n=qs[t];if(n===void 0){let e=su.get(t);if(e!==void 0)n=qs[e],P(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return ou(n)}var lu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(e){return e.replace(lu,du)}function du(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function fu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var pu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function mu(e){return pu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var hu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function gu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:hu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var _u={302:`ENVMAP_MODE_REFRACTION`};function vu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:_u[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var yu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function bu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:yu[e.combine]||`ENVMAP_BLENDING_NONE`}function xu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Su(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=mu(n),l=gu(n),u=vu(n),d=bu(n),f=xu(n),p=$l(n),m=eu(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(nu).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(nu).join(`
`),_.length>0&&(_+=`
`)):(g=[fu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(nu).join(`
`),_=[fu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:qs.tonemapping_pars_fragment,n.toneMapping===0?``:Xl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,qs.colorspace_pars_fragment,Jl(`linearToOutputTexel`,n.outputColorSpace),Ql(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(nu).join(`
`)),o=ou(o),o=ru(o,n),o=iu(o,n),s=ou(s),s=ru(s,n),s=iu(s,n),o=uu(o),s=uu(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Vl(i,i.VERTEX_SHADER,y),S=Vl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ql(i,x,`vertex`),n=ql(i,S,`fragment`);F(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):P(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Bl(i,h),T=tu(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Hl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ul++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Cu=0,wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tu(e),t.set(e,n)),n}},Tu=class{constructor(e){this.id=Cu++,this.code=e,this.usedTimes=0}};function Eu(e){return e===1030||e===37490||e===36285}function Du(e,t,n,r,i,a){let o=new ur,s=new wu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&P(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=Js[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),A=h.isInstancedMesh===!0,re=h.isBatchedMesh===!0,ie=!!i.map,ae=!!i.matcap,oe=!!x,se=!!i.aoMap,ce=!!i.lightMap,le=!!i.bumpMap&&i.wireframe===!1,ue=!!i.normalMap,de=!!i.displacementMap,fe=!!i.emissiveMap,pe=!!i.metalnessMap,me=!!i.roughnessMap,he=i.anisotropy>0,ge=i.clearcoat>0,_e=i.dispersion>0,ve=i.retroreflectivity>0,ye=i.iridescence>0,be=i.sheen>0,xe=i.transmission>0,Se=he&&!!i.anisotropyMap,Ce=ge&&!!i.clearcoatMap,we=ge&&!!i.clearcoatNormalMap,Te=ge&&!!i.clearcoatRoughnessMap,Ee=ye&&!!i.iridescenceMap,De=ye&&!!i.iridescenceThicknessMap,Oe=be&&!!i.sheenColorMap,j=be&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=xe&&!!i.transmissionMap,Ne=xe&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,Ie=i.alphaTest>0,Le=!!i.alphaHash,M=!!i.extensions,Re=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Re=e.toneMapping);let N={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&h._colorsTexture!==null,instancing:A,instancingColor:A&&h.instanceColor!==null,instancingMorph:A&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ln.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:ae,envMap:oe,envMapMode:oe&&x.mapping,envMapCubeUVHeight:S,aoMap:se,lightMap:ce,bumpMap:le,normalMap:ue,displacementMap:de,emissiveMap:fe,normalMapObjectSpace:ue&&i.normalMapType===1,normalMapTangentSpace:ue&&i.normalMapType===0,packedNormalMap:ue&&i.normalMapType===0&&Eu(i.normalMap.format),metalnessMap:pe,roughnessMap:me,anisotropy:he,anisotropyMap:Se,clearcoat:ge,clearcoatMap:Ce,clearcoatNormalMap:we,clearcoatRoughnessMap:Te,dispersion:_e,retroreflection:ve,iridescence:ye,iridescenceMap:Ee,iridescenceThicknessMap:De,sheen:be,sheenColorMap:Oe,sheenRoughnessMap:j,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:xe,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ie,alphaHash:Le,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:se&&m(i.aoMap.channel),lightMapUv:ce&&m(i.lightMap.channel),bumpMapUv:le&&m(i.bumpMap.channel),normalMapUv:ue&&m(i.normalMap.channel),displacementMapUv:de&&m(i.displacementMap.channel),emissiveMapUv:fe&&m(i.emissiveMap.channel),metalnessMapUv:pe&&m(i.metalnessMap.channel),roughnessMapUv:me&&m(i.roughnessMap.channel),anisotropyMapUv:Se&&m(i.anisotropyMap.channel),clearcoatMapUv:Ce&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:we&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:De&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:j&&m(i.sheenRoughnessMap.channel),specularMapUv:ke&&m(i.specularMap.channel),specularColorMapUv:Ae&&m(i.specularColorMap.channel),specularIntensityMapUv:je&&m(i.specularIntensityMap.channel),transmissionMapUv:Me&&m(i.transmissionMap.channel),thicknessMapUv:Ne&&m(i.thicknessMap.channel),alphaMapUv:Fe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ue||he),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Fe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ue===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&Ln.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:fe&&i.emissiveMap.isVideoTexture===!0&&Ln.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:M&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(M&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return N.vertexUv1s=c.has(1),N.vertexUv2s=c.has(2),N.vertexUv3s=c.has(3),c.clear(),N}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Js[t];n=No.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Su(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Ou(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ku(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Au(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ju(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||ku),r.length>1&&r.sort(t||Au),i.length>1&&i.sort(t||Au)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Mu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ju,e.set(t,[i])):n>=r.length?(i=new ju,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Nu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new L,color:new z};break;case`SpotLight`:n={position:new L,direction:new L,color:new z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new L,color:new z,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new L,skyColor:new z,groundColor:new z};break;case`RectAreaLight`:n={color:new z,position:new L,halfWidth:new L,halfHeight:new L}}return e[t.id]=n,n}}}function Pu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Fu=0;function Iu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Lu(e){let t=new Nu,n=Pu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new L);let i=new L,a=new $n,o=new $n;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Iu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=H.LTC_FLOAT_1,r.rectAreaLTC2=H.LTC_FLOAT_2):(r.rectAreaLTC1=H.LTC_HALF_1,r.rectAreaLTC2=H.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Fu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Ru(e){let t=new Lu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function zu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ru(e),t.set(n,[a])):r>=i.length?(a=new Ru(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Bu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Hu=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Uu=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Wu=new $n,Gu=new L,Ku=new L;function qu(e,t,n){let r=new ma,i=new I,a=new I,o=new Jn,s=new zo,c=new Bo,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Io({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new I},radius:{value:4}},vertexShader:Bu,fragmentShader:Vu}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ki;m.setAttribute(`position`,new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new V(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(P(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){P(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){P(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Xn(i.x,i.y,{format:Ge,type:Pe,minFilter:Te,magFilter:Te,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ia(i.x,i.y,Ne),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Ve,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Se,d.map.depthTexture.magFilter=Se}else l.isPointLight?(d.map=new wc(i.x),d.map.depthTexture=new La(i.x,Me)):(d.map=new Xn(i.x,i.y),d.map.depthTexture=new Ia(i.x,i.y,Me)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Ve,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Te,d.map.depthTexture.magFilter=Te):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Se,d.map.depthTexture.magFilter=Se);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Gu.setFromMatrixPosition(l.matrixWorld),e.position.copy(Gu),Ku.copy(e.position),Ku.add(Hu[t]),e.up.copy(Uu[t]),e.lookAt(Ku),e.updateMatrixWorld(),n.makeTranslation(-Gu.x,-Gu.y,-Gu.z),Wu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Wu,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Xn(i.x,i.y,{format:Ge,type:Pe}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ju(e,t){function n(){let t=!1,n=new Jn,r=null,i=new Jn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?pe(e.DEPTH_TEST):me(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=en[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?pe(e.STENCIL_TEST):me(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new z(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,re=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),A=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(ie)[1]),A=re>=1);let ae=null,oe={},se=e.getParameter(e.SCISSOR_BOX),ce=e.getParameter(e.VIEWPORT),le=new Jn().fromArray(se),ue=new Jn().fromArray(ce);function de(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let fe={};fe[e.TEXTURE_2D]=de(e.TEXTURE_2D,e.TEXTURE_2D,1),fe[e.TEXTURE_CUBE_MAP]=de(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[e.TEXTURE_2D_ARRAY]=de(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),fe[e.TEXTURE_3D]=de(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),pe(e.DEPTH_TEST),o.setFunc(3),Se(!1),Ce(1),pe(e.CULL_FACE),be(0);function pe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function me(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function he(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ge(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function _e(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ve={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ve[103]=e.MIN,ve[104]=e.MAX;let ye={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function be(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(me(e.BLEND),g=!1);else if(g===!1&&(pe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:F(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:F(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:F(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:F(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ve[n],ve[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ye[r],ye[i],ye[o],ye[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function xe(t,n){t.side===2?me(e.CULL_FACE):pe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),Se(r),t.blending===1&&t.transparent===!1?be(0):be(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Te(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?pe(e.SAMPLE_ALPHA_TO_COVERAGE):me(e.SAMPLE_ALPHA_TO_COVERAGE)}function Se(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Ce(t){t===0?me(e.CULL_FACE):(pe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function we(t){t!==ee&&(A&&e.lineWidth(t),ee=t)}function Te(t,n,r){t?(pe(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):me(e.POLYGON_OFFSET_FILL)}function Ee(t){t?pe(e.SCISSOR_TEST):me(e.SCISSOR_TEST)}function De(t){t===void 0&&(t=e.TEXTURE0+ne-1),ae!==t&&(e.activeTexture(t),ae=t)}function Oe(t,n,r){r===void 0&&(r=ae===null?e.TEXTURE0+ne-1:ae);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(ae!==r&&(e.activeTexture(r),ae=r),e.bindTexture(t,n||fe[t]),i.type=t,i.texture=n)}function j(){let t=oe[ae];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ke(){try{e.compressedTexImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ae(){try{e.compressedTexImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function je(){try{e.texSubImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Me(){try{e.texSubImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Fe(){try{e.texStorage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ie(){try{e.texStorage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Le(){try{e.texImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function M(){try{e.texImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Re(t){return d[t]===void 0?e.getParameter(t):d[t]}function N(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function ze(t){le.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),le.copy(t))}function Be(t){ue.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ue.copy(t))}function Ve(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function He(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ae=null,oe={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new z(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,le.set(0,0,e.canvas.width,e.canvas.height),ue.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:pe,disable:me,bindFramebuffer:he,drawBuffers:ge,useProgram:_e,setBlending:be,setMaterial:xe,setFlipSided:Se,setCullFace:Ce,setLineWidth:we,setPolygonOffset:Te,setScissorTest:Ee,activeTexture:De,bindTexture:Oe,unbindTexture:j,compressedTexImage2D:ke,compressedTexImage3D:Ae,texImage2D:Le,texImage3D:M,pixelStorei:N,getParameter:Re,updateUBOMapping:Ve,uniformBlockBinding:He,texStorage2D:Fe,texStorage3D:Ie,texSubImage2D:je,texSubImage3D:Me,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Pe,scissor:ze,viewport:Be,reset:Ue}}function Yu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new I,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):qt(`canvas`)}function g(e,t,n){let r=1,i=M(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),P(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&P(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];P(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||P(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Bt:Ln.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,P(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function ee(){O=0}function k(){return O}function te(e){O=e}function ne(){let e=O;return e>=i.maxTextures&&P(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function A(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function re(t,i){let a=r.get(t);if(t.isVideoTexture&&Ie(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)P(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)P(`WebGLRenderer: Texture marked for update but image is incomplete`);else{me(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ie(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?me(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ae(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?me(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function oe(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?he(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let se={[ye]:e.REPEAT,[be]:e.CLAMP_TO_EDGE,[xe]:e.MIRRORED_REPEAT},ce={[Se]:e.NEAREST,[Ce]:e.NEAREST_MIPMAP_NEAREST,[we]:e.NEAREST_MIPMAP_LINEAR,[Te]:e.LINEAR,[Ee]:e.LINEAR_MIPMAP_NEAREST,[De]:e.LINEAR_MIPMAP_LINEAR},le={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ue(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&P(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,se[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,se[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,se[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ce[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ce[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,le[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function de(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=A(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function fe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function pe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=fe(n.start,r.width,4),c=fe(t.start,r.width,4);n.start<=i+1&&a===c&&fe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function me(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=de(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Ln.getPrimaries(Ln.workingColorSpace),r=o.colorSpace===``?null:Ln.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Le(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ue(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===He,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&pe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Us(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Us(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=M(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=M(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,o,s){if(o.image.length!==6)return;let c=de(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Ln.getPrimaries(Ln.workingColorSpace),r=o.colorSpace===``?null:Ln.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Le(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);ue(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=M(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ge(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Fe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Pe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);Fe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ve(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,l.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ue(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else re(i.depthTexture,0);let u=l.__webglTexture,d=Pe(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Fe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Fe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Oe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ve(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ve(i.__webglFramebuffer[0],t,0):ve(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),_e(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),_e(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function j(t,n,i){let a=r.get(t);n!==void 0&&ge(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Oe(t)}function ke(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Fe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),_e(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ue(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ge(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ge(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ue(c,a),ge(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ue(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ge(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ge(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&Oe(t)}function Ae(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let je=[],Me=[];function Ne(t){if(t.samples>0){if(Fe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(je.length=0,Me.length=0,je.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(je.push(l),Me.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(i.maxSamples,e.samples)}function Fe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ie(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Le(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ln.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&P(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):F(`WebGLTextures: Unsupported texture color space:`,n)),t}function M(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ne,this.resetTextureUnits=ee,this.getTextureUnits=k,this.setTextureUnits=te,this.setTexture2D=re,this.setTexture2DArray=ie,this.setTexture3D=ae,this.setTextureCube=oe,this.rebindTextures=j,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Xu(e,t){function n(n,r=``){let i,a=Ln.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Zu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ra(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Io({vertexShader:Zu,fragmentShader:Qu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new V(new So(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ed=class extends tn{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new $u,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new I,C=null,w=null,T=new ys;T.viewport=new Jn;let E=new ys;E.viewport=new Jn;let D=[T,E],O=new Es,ee=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new kr,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new kr,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new kr,b[e]=t),t.getHandSpace()};function te(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,A);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}ee=null,k=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,A),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?He:Ve,a=_.stencil?Le:Me);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Xn(d.textureWidth,d.textureHeight,{format:Be,type:Oe,depthTexture:new Ia(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Xn(f.framebufferWidth,f.framebufferHeight,{format:Be,type:Oe,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function A(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let re=new L,ie=new L;function ae(e,t,n){re.setFromMatrixPosition(t.matrixWorld),ie.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(ie),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(ee!==O.near||k!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),ee=O.near,k=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;oe(O,i);for(let e=0;e<a.length;e++)oe(a[e],i);a.length===2?ae(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),se(e,O,i)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=on*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ce=null;function le(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new ys,o.layers.enable(n),o.viewport=new Jn,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ra,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ue=new Gs;ue.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},td=new $n,nd=new R;nd.set(-1,0,0,0,1,0,0,0,1);function rd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Mo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(td.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(nd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function id(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return F(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?P(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):P(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ad=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),od=null;function sd(){return od===null&&(od=new ta(ad,16,16,Ge,Pe),od.name=`DFG_LUT`,od.minFilter=Te,od.magFilter=Te,od.wrapS=be,od.wrapT=be,od.generateMipmaps=!1,od.needsUpdate=!0),od}var cd=class{constructor(e={}){let{canvas:t=Jt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Oe}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([qe,Ke,We]),g=new Set([Oe,Me,Ae,Le,Fe,Ie]),_=new Uint32Array(4),v=new Int32Array(4),y=new L,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,ee=null,k=null;this._outputColorSpace=Rt;let te=0,ne=0,A=null,re=-1,ie=null,ae=new Jn,oe=new Jn,se=null,ce=new z(0),le=0,ue=t.width,de=t.height,fe=1,pe=null,me=null,he=new Jn(0,0,ue,de),ge=new Jn(0,0,ue,de),_e=!1,ve=new ma,ye=!1,be=!1,xe=new $n,Se=new L,Ce=new Jn,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ee(){return A===null?fe:1}let j=n;function ke(e,n){return t.getContext(e,n)}let je,Ne,M,Re,N,ze,Be,Ve,He,Ue,Ge,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),j===null){let t=`webgl2`;if(j=ke(t,e),j===null)throw ke(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),F(`WebGLRenderer: `+e.message),e}function ot(){je=new Ec(j),je.init(),rt=new Xu(j,je),Ne=new tc(j,je,e,rt),M=new Ju(j,je),Ne.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),O=j.createFramebuffer(),ee=j.createFramebuffer(),k=j.createFramebuffer(),Re=new kc(j),N=new Ou,ze=new Yu(j,je,M,N,Ne,rt,Re),Be=new Tc(T),Ve=new Ks(j),it=new $s(j,Ve),He=new Dc(j,Ve,Re,it),Ue=new jc(j,He,Ve,it,Re),et=new Ac(j,Ne,ze),Ze=new nc(N),Ge=new Du(T,Be,je,Ne,it,Ze),Je=new rd(T,N),Ye=new Mu,Xe=new zu(je),$e=new Qs(T,Be,M,Ue,p,s),Qe=new qu(T,Ue,Ne),at=new id(j,Re,Ne,M),tt=new ec(j,je,Re),nt=new Oc(j,je,Re),Re.programs=Ge.programs,T.capabilities=Ne,T.extensions=je,T.properties=N,T.renderLists=Ye,T.shadowMap=Qe,T.state=M,T.info=Re}m!==1009&&(w=new Nc(m,t.width,t.height,o,r,i));let st=new ed(T,j);this.xr=st,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let e=je.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=je.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(e){e!==void 0&&(fe=e,this.setSize(ue,de,!1))},this.getSize=function(e){return e.set(ue,de)},this.setSize=function(e,n,r=!0){st.isPresenting?P(`WebGLRenderer: Can't change size while VR device is presenting.`):(ue=e,de=n,t.width=Math.floor(e*fe),t.height=Math.floor(n*fe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ue*fe,de*fe).floor()},this.setDrawingBufferSize=function(e,n,r){ue=e,de=n,fe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)F(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){P(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ae)},this.getViewport=function(e){return e.copy(he)},this.setViewport=function(e,t,n,r){e.isVector4?he.set(e.x,e.y,e.z,e.w):he.set(e,t,n,r),M.viewport(ae.copy(he).multiplyScalar(fe).round())},this.getScissor=function(e){return e.copy(ge)},this.setScissor=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),M.scissor(oe.copy(ge).multiplyScalar(fe).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(e){M.setScissorTest(_e=e)},this.setOpaqueSort=function(e){pe=e},this.setTransparentSort=function(e){me=e},this.getClearColor=function(e){return e.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(A!==null){let t=A.texture.format;e=h.has(t)}if(e){let e=A.texture.type,t=g.has(e),n=$e.getClearColor(),r=$e.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,j.clearBufferuiv(j.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,j.clearBufferiv(j.COLOR,0,v))}else r|=j.COLOR_BUFFER_BIT}t&&(r|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&j.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),$e.dispose(),Ye.dispose(),Xe.dispose(),N.dispose(),Be.dispose(),Ue.dispose(),it.dispose(),at.dispose(),Ge.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,_t),st.removeEventListener(`sessionend`,vt),yt.stop()};function ct(e){e.preventDefault(),Xt(`WebGLRenderer: Context Lost.`),E=!0}function lt(){Xt(`WebGLRenderer: Context Restored.`),E=!1;let e=Re.autoReset,t=Qe.enabled,n=Qe.autoUpdate,r=Qe.needsUpdate,i=Qe.type;ot(),Re.autoReset=e,Qe.enabled=t,Qe.autoUpdate=n,Qe.needsUpdate=r,Qe.type=i}function ut(e){F(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),ft(t)}function ft(e){pt(e),N.remove(e)}function pt(e){let t=N.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=we);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);M.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=Ve.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(M.setLineWidth(r.wireframeLinewidth*Ee()),g.setMode(j.LINES)):g.setMode(j.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),M.setLineWidth(e*Ee()),i.isLineSegments?g.setMode(j.LINES):i.isLineLoop?g.setMode(j.LINE_LOOP):g.setMode(j.LINE_STRIP)}else i.isPoints?g.setMode(j.POINTS):i.isSprite&&g.setMode(j.TRIANGLES);if(i.isBatchedMesh){if(je.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=N.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(j,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),ye===!0&&Ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Xe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),be=this.localClippingEnabled,ye=Ze.init(this.clippingPlanes,be),ye===!0&&Ze.setGlobalState(this.clippingPlanes,t),D!==null&&Qe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];mt(o,n,t,e),r.add(o)}else mt(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=N.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}je.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ht=null;function gt(e){ht&&ht(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new Gs;yt.setAnimationLoop(gt),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){ht=e,st.setAnimationLoop(e),e===null?yt.stop():yt.start()},st.addEventListener(`sessionstart`,_t),st.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){F(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=w!==null&&(A===null||n)&&w.begin(T,A);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,A),x=Xe.get(e,C.length),x.init(t),x.state.textureUnits=ze.getTextureUnits(),C.push(x),xe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ve.setFromProjectionMatrix(xe,Wt,t.reversedDepth),be=this.localClippingEnabled,ye=Ze.init(this.clippingPlanes,be),b=Ye.get(e,S.length),b.init(),S.push(b),st.enabled===!0&&st.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,T.sortObjects)}bt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(pe,me),Te=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Te&&$e.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&Ze.beginShadows();let i=x.state.shadowsArray;if(Qe.render(i,e,t),ye===!0&&Ze.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Te&&$e.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(b,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Te&&$e.render(e),xt(b,e,t)}A!==null&&ne===0&&(ze.updateMultisampleRenderTarget(A),ze.updateRenderTargetMipmap(A)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),it.resetDefaultState(),re=-1,ie=null,C.pop(),C.length>0?(x=C[C.length-1],ze.setTextureUnits(x.state.textureUnits),ye===!0&&Ze.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ve)){r&&Ce.setFromMatrixPosition(e.matrixWorld).applyMatrix4(xe);let i=Ue.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Ce.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ve))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ce.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ce.copy(e.boundingSphere.center)),Ce.applyMatrix4(e.matrixWorld).applyMatrix4(xe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Ce.z,s,t)}}else a.visible&&b.push(e,i,a,n,Ce.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ye===!0&&Ze.setGlobalState(T.clippingPlanes,n),r&&M.viewport(ae.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=je.has(`EXT_color_buffer_half_float`)||je.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Xn(1,1,{generateMipmaps:!0,type:e?Pe:Oe,minFilter:De,samples:Math.max(4,Ne.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ln.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ae;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ce),le=T.getClearAlpha(),le<1&&T.setClearColor(16777215,.5),T.clear(),Te&&$e.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ye===!0&&Ze.setGlobalState(T.clippingPlanes,r),Ct(e,n,r),ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a),je.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ce,le),d!==void 0&&(r.viewport=d),T.toneMapping=u}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=we);let r=N.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=Ge.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ze.uniform),Dt(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Bl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=N.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=we),ze.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=A===null?T.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ln.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=N.get(r),y=x.state.lights;if(ye===!0&&(be===!0||e!==ie)){let t=e===ie&&r.id===re;Ze.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ze.numPlanes||v.numIntersection!==Ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=Tt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),ee=v.uniforms;if(M.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==re&&(re=r.id,w=!0),v.needsLights){let e=Ot(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ie!==e){M.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(j,`projectionMatrix`,e.projectionMatrix),O.setValue(j,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(j,Se.setFromMatrixPosition(e.matrixWorld)),Ne.logarithmicDepthBuffer&&O.setValue(j,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(j,`isOrthographic`,e.isOrthographicCamera===!0),ie!==e&&(ie=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(j,`sunShadowMap`,y.state.sunShadowMap,ze),y.state.directionalShadowMap.length>0&&O.setValue(j,`directionalShadowMap`,y.state.directionalShadowMap,ze),y.state.spotShadowMap.length>0&&O.setValue(j,`spotShadowMap`,y.state.spotShadowMap,ze),y.state.pointShadowMap.length>0&&O.setValue(j,`pointShadowMap`,y.state.pointShadowMap,ze)),i.isSkinnedMesh){O.setOptional(j,i,`bindMatrix`),O.setOptional(j,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(j,`boneTexture`,e.boneTexture,ze))}i.isBatchedMesh&&(O.setOptional(j,i,`batchingTexture`),O.setValue(j,`batchingTexture`,i._matricesTexture,ze),O.setOptional(j,i,`batchingIdTexture`),O.setValue(j,`batchingIdTexture`,i._indirectTexture,ze),O.setOptional(j,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(j,`batchingColorTexture`,i._colorsTexture,ze));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&et.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(j,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(ee.envMapIntensity.value=t.environmentIntensity),ee.dfgLUT!==void 0&&(ee.dfgLUT.value=sd()),w){if(O.setValue(j,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&At(ee,E),a&&r.fog===!0&&Je.refreshFogUniforms(ee,a),Je.refreshMaterialUniforms(ee,r,fe,de,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;ee.probesSH.value=e.texture,ee.probesMin.value.copy(e.boundingBox.min),ee.probesMax.value.copy(e.boundingBox.max),ee.probesResolution.value.copy(e.resolution)}Bl.upload(j,Et(v),ee,ze)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Bl.upload(j,Et(v),ee,ze),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(j,`center`,i.center),O.setValue(j,`modelViewMatrix`,i.modelViewMatrix),O.setValue(j,`normalMatrix`,i.normalMatrix),O.setValue(j,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,S),at.bind(n,S)}}return S}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(e,t,n){let r=N.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),N.get(e.texture).__webglTexture=t,N.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=N.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){A=e,te=t,ne=n;let r=null,i=!1,a=!1;if(e){let o=N.get(e);if(o.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(j.FRAMEBUFFER,o.__webglFramebuffer),ae.copy(e.viewport),oe.copy(e.scissor),se=e.scissorTest,M.viewport(ae),M.scissor(oe),M.setScissorTest(se),re=-1;return}if(o.__webglFramebuffer===void 0)ze.setupRenderTarget(e);else if(o.__hasExternalTextures)ze.rebindTextures(e,N.get(e.texture).__webglTexture,N.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&N.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ze.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=N.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ze.useMultisampledRTT(e)===!1?N.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ae.copy(e.viewport),oe.copy(e.scissor),se=e.scissorTest}else ae.copy(he).multiplyScalar(fe).floor(),oe.copy(ge).multiplyScalar(fe).floor(),se=_e;if(n!==0&&(r=O),M.bindFramebuffer(j.FRAMEBUFFER,r)&&M.drawBuffers(e,r),M.viewport(ae),M.scissor(oe),M.setScissorTest(se),i){let r=N.get(e.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=N.get(e.textures[t]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=N.get(e.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,t.__webglTexture,n)}re=-1};function Mt(e){let t=N.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ne.textureFormatReadable(e.format),t.__typeReadable=Ne.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=N.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){M.bindFramebuffer(j.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&j.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=A===null?null:N.get(A).__webglFramebuffer;M.bindFramebuffer(j.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=N.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){M.bindFramebuffer(j.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,f),j.bufferData(j.PIXEL_PACK_BUFFER,a.byteLength,j.STREAM_READ),j.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let p=A===null?null:N.get(A).__webglFramebuffer;M.bindFramebuffer(j.FRAMEBUFFER,p);let m=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await $t(j,m,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,f),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,a),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(f),j.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ze.setTexture2D(e,0),j.copyTexSubImage2D(j.TEXTURE_2D,n,0,0,o,s,i,a),M.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(ze.setTexture3D(t,0),v=j.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ze.setTexture2DArray(t,0),v=j.TEXTURE_2D_ARRAY):(ze.setTexture2D(t,0),v=j.TEXTURE_2D),M.activeTexture(j.TEXTURE0),M.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,t.flipY),M.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),M.pixelStorei(j.UNPACK_ALIGNMENT,t.unpackAlignment);let y=M.getParameter(j.UNPACK_ROW_LENGTH),b=M.getParameter(j.UNPACK_IMAGE_HEIGHT),x=M.getParameter(j.UNPACK_SKIP_PIXELS),S=M.getParameter(j.UNPACK_SKIP_ROWS),C=M.getParameter(j.UNPACK_SKIP_IMAGES);M.pixelStorei(j.UNPACK_ROW_LENGTH,h.width),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,h.height),M.pixelStorei(j.UNPACK_SKIP_PIXELS,l),M.pixelStorei(j.UNPACK_SKIP_ROWS,u),M.pixelStorei(j.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=N.get(e),r=N.get(t),h=N.get(n.__renderTarget),g=N.get(r.__renderTarget);M.bindFramebuffer(j.READ_FRAMEBUFFER,h.__webglFramebuffer),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,N.get(e).__webglTexture,i,d+n),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,N.get(t).__webglTexture,a,m+n)),j.blitFramebuffer(l,u,o,s,f,p,o,s,j.DEPTH_BUFFER_BIT,j.NEAREST);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||N.has(e)){let n=N.get(e),r=N.get(t);M.bindFramebuffer(j.READ_FRAMEBUFFER,ee),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,k);for(let e=0;e<c;e++)w?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,n.__webglTexture,i),T?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,r.__webglTexture,a),i===0?T?j.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):j.copyTexSubImage2D(v,a,f,p,l,u,o,s):j.blitFramebuffer(l,u,o,s,f,p,o,s,j.COLOR_BUFFER_BIT,j.NEAREST);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?j.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?j.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):j.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):j.texSubImage2D(j.TEXTURE_2D,a,f,p,o,s,g,_,h);M.pixelStorei(j.UNPACK_ROW_LENGTH,y),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,b),M.pixelStorei(j.UNPACK_SKIP_PIXELS,x),M.pixelStorei(j.UNPACK_SKIP_ROWS,S),M.pixelStorei(j.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&j.generateMipmap(v),M.unbindTexture()},this.initRenderTarget=function(e){N.get(e).__webglFramebuffer===void 0&&ze.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ze.setTextureCube(e,0):e.isData3DTexture?ze.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ze.setTexture2DArray(e,0):ze.setTexture2D(e,0),M.unbindTexture()},this.resetState=function(){te=0,ne=0,A=null,M.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Wt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ln._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ln._getUnpackColorSpace()}},ld=.5;function ud(e){return e*ld}var dd=class{canvas;renderer;scene=new Ir;camera;sun;hemi;yawStep=0;yaw=Math.PI/4;pitch=.62;zoom=1;zoomTarget=1;target=new L;center=new L;targetGoal=new L;viewSize=9;shake=0;listeners=[];last=performance.now();running=!1;constructor(e){this.canvas=e,this.renderer=new cd({canvas:e,antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.renderer.outputColorSpace=Rt,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05,this.camera=new bs(-1,1,1,-1,.1,200),this.hemi=new ss(16777215,4478310,1.1),this.scene.add(this.hemi),this.sun=new Ss(16777215,2.2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-8e-4,this.sun.shadow.normalBias=.02;let t=this.sun.shadow.camera;t.left=-12,t.right=12,t.top=12,t.bottom=-12,t.near=1,t.far=80,this.scene.add(this.sun),this.scene.add(this.sun.target),window.addEventListener(`resize`,()=>this.resize()),this.resize()}onFrame(e){this.listeners.push(e)}setLook(e,t,n,r,i,a){this.scene.background=new z(e),this.scene.fog=new Fr(t,40,90),this.sun.color.set(n),this.sun.intensity=r,this.hemi.color.set(i),this.hemi.groundColor.set(a)}frameMap(e,t,n){this.targetGoal.set((e-1)/2,ud(n)*.35,(t-1)/2),this.center.copy(this.targetGoal),this.target.copy(this.targetGoal),this.viewSize=Math.max(e,t)*1.02,this.sun.position.set((e-1)/2+8,22,(t-1)/2+5),this.sun.target.position.set((e-1)/2,0,(t-1)/2);let r=this.sun.shadow.camera,i=Math.max(e,t)*.85;r.left=-i,r.right=i,r.top=i,r.bottom=-i,r.updateProjectionMatrix(),this.updateCamera()}resize(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(e,t,!1),this.updateCamera()}rotate(e){this.yawStep=(this.yawStep+e+4)%4}yawGoal(){return Math.PI/4+this.yawStep*(Math.PI/2)}zoomBy(e){this.zoomTarget=Math.max(.6,Math.min(2.6,this.zoomTarget*e))}focus(e,t,n,r=.55){this.targetGoal.copy(this.center).lerp(new L(e,t,n),r)}pan(e,t){let n=new L(Math.cos(this.yaw),0,-Math.sin(this.yaw)),r=new L(-Math.sin(this.yaw),0,-Math.cos(this.yaw));this.targetGoal.addScaledVector(n,e).addScaledVector(r,t)}panPixels(e,t){let n=(this.camera.top-this.camera.bottom)/Math.max(1,this.canvas.clientHeight);this.pan(-e*n,t*n/Math.sin(this.pitch))}addShake(e){this.shake=Math.min(.35,this.shake+e)}gridDirForScreen(e,t){let n={x:Math.cos(this.yaw),z:-Math.sin(this.yaw)},r={x:-Math.sin(this.yaw),z:-Math.cos(this.yaw)},i=n.x*e+r.x*-t,a=n.z*e+r.z*-t;return Math.abs(i)>Math.abs(a)?i>0?1:3:a>0?0:2}updateCamera(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight,n=e/Math.max(1,t),r=this.viewSize/2/this.zoom;this.camera.left=-r*n,this.camera.right=r*n,this.camera.top=r,this.camera.bottom=-r,this.camera.updateProjectionMatrix();let i=Math.cos(this.pitch),a=0,o=0;this.shake>.001&&(a=(Math.random()-.5)*this.shake,o=(Math.random()-.5)*this.shake),this.camera.position.set(this.target.x+Math.sin(this.yaw)*i*40+a,this.target.y+Math.sin(this.pitch)*40+o,this.target.z+Math.cos(this.yaw)*i*40),this.camera.lookAt(this.target.x+a,this.target.y+o,this.target.z)}start(){if(this.running)return;this.running=!0;let e=()=>{this.running&&(requestAnimationFrame(e),this.frame())};requestAnimationFrame(e)}stop(){this.running=!1}frame(e){let t=performance.now(),n=e??Math.min(.1,(t-this.last)/1e3);this.last=t;let r=this.yawGoal()-this.yaw;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;this.yaw+=r*Math.min(1,n*9),this.zoom+=(this.zoomTarget-this.zoom)*Math.min(1,n*10),this.target.lerp(this.targetGoal,Math.min(1,n*5)),this.shake*=.02**n;for(let e of this.listeners)e(n);this.updateCamera(),this.renderer.render(this.scene,this.camera)}project(e){let t=e.clone().project(this.camera),n=this.canvas.clientWidth,r=this.canvas.clientHeight;return{x:(t.x*.5+.5)*n,y:(-t.y*.5+.5)*r}}get yawRadians(){return this.yaw}},U=e=>e,W={shape:`single`,size:0},fd={kind:`melee`,min:1,max:1},pd={kind:`self`,min:0,max:0},md={attack:U({id:`attack`,name:`Attack`,desc:`A basic attack with the equipped weapon.`,school:`physical`,mp:0,range:{kind:`weapon`,min:1,max:1},area:W,target:`enemy`,effects:[{k:`damage`,power:100,stat:`atk`,weaponElement:!0}],anim:`swing`,tag:`attack`}),shove:U({id:`shove`,name:`Shove`,desc:`A shoulder check that knocks the target back a tile. Walls and other units hurt; ledges hurt more.`,school:`physical`,mp:4,range:fd,area:W,target:`enemy`,effects:[{k:`damage`,power:55,stat:`atk`},{k:`knockback`,dist:1}],anim:`thrust`,tag:`attack`}),secondWind:U({id:`secondWind`,name:`Second Wind`,desc:`Catch your breath: recover 30% of max HP.`,school:`skill`,mp:0,cooldown:4,range:pd,area:W,target:`self`,effects:[{k:`heal`,pct:.3,to:`self`}],anim:`self`,tag:`heal`}),shieldWall:U({id:`shieldWall`,name:`Shield Wall`,desc:`You and adjacent allies gain Fortify (-30% physical damage) for 2 turns.`,school:`skill`,mp:8,range:pd,area:{shape:`radius`,size:1},target:`self`,effects:[{k:`status`,status:`fortify`,turns:2,chance:100,to:`ally`}],anim:`self`,tag:`buff`}),provoke:U({id:`provoke`,name:`Provoke`,desc:`Enemies within 2 tiles are Taunted for 2 turns: half damage to anyone but you.`,school:`skill`,mp:6,cooldown:2,range:pd,area:{shape:`radius`,size:2,vert:4,excludeSelf:!0},target:`self`,effects:[{k:`status`,status:`taunt`,turns:2,chance:85,to:`enemy`}],anim:`self`,tag:`debuff`}),shieldBash:U({id:`shieldBash`,name:`Shield Bash`,desc:`Slam with the shield: 95 power, 45% chance to Stun.`,school:`physical`,mp:8,range:fd,area:W,target:`enemy`,effects:[{k:`damage`,power:95,stat:`atk`},{k:`status`,status:`stun`,turns:1,chance:45}],anim:`slam`,tag:`attack`}),guardianStance:U({id:`guardianStance`,name:`Guardian`,desc:`Until your next turn, single-target attacks on adjacent allies hit you instead.`,school:`skill`,mp:6,range:pd,area:W,target:`self`,effects:[{k:`status`,status:`guardian`,turns:1,chance:100,to:`self`},{k:`status`,status:`fortify`,turns:1,chance:100,to:`self`}],anim:`self`,tag:`buff`}),bastion:U({id:`bastion`,name:`Bastion`,desc:`SURGE. Every ally within 3 tiles gains a 45-point Barrier and Fortify for 2 turns.`,school:`skill`,mp:0,surge:!0,range:pd,area:{shape:`radius`,size:3,vert:6},target:`self`,effects:[{k:`status`,status:`barrier`,turns:3,chance:100,value:45,to:`ally`},{k:`status`,status:`fortify`,turns:2,chance:100,to:`ally`}],anim:`self`,tag:`buff`}),cleave:U({id:`cleave`,name:`Cleave`,desc:`A wide swing that hits the three tiles in front of you (90 power).`,school:`physical`,mp:6,range:fd,area:{shape:`sweep`,size:1},target:`tile`,effects:[{k:`damage`,power:90,stat:`atk`}],anim:`swing`,tag:`aoe`}),leapStrike:U({id:`leapStrike`,name:`Leap Strike`,desc:`Leap up to 3 tiles (any height) and crash down: 75 power to adjacent enemies, 30% Stun.`,school:`physical`,mp:10,cooldown:2,range:{kind:`magic`,min:1,max:3},area:{shape:`radius`,size:1,vert:3,excludeSelf:!0},target:`empty`,move:`leap`,effects:[{k:`damage`,power:75,stat:`atk`},{k:`status`,status:`stun`,turns:1,chance:30}],anim:`slam`,tag:`move`}),recklessBlow:U({id:`recklessBlow`,name:`Reckless Blow`,desc:`Everything into one swing: 160 power, but you lose 10% of max HP.`,school:`physical`,mp:4,range:fd,area:W,target:`enemy`,acc:85,effects:[{k:`damage`,power:160,stat:`atk`,recoil:.1}],anim:`slam`,tag:`attack`}),warcry:U({id:`warcry`,name:`Warcry`,desc:`You and adjacent allies gain Might (+25% damage) for 2 turns.`,school:`skill`,mp:8,cooldown:2,range:pd,area:{shape:`radius`,size:1},target:`self`,effects:[{k:`status`,status:`might`,turns:2,chance:100,to:`ally`}],anim:`self`,tag:`buff`}),rampage:U({id:`rampage`,name:`Rampage`,desc:`SURGE. Hit every adjacent enemy twice at 95 power.`,school:`physical`,mp:0,surge:!0,range:pd,area:{shape:`radius`,size:1,excludeSelf:!0},target:`self`,effects:[{k:`damage`,power:95,stat:`atk`,hits:2}],anim:`swing`,tag:`aoe`}),skewer:U({id:`skewer`,name:`Skewer`,desc:`Drive the spear through 2 tiles in a line (100 power, ignores 25% DEF).`,school:`physical`,mp:6,range:{kind:`reach`,min:1,max:2},area:{shape:`line`,size:2},target:`tile`,effects:[{k:`damage`,power:100,stat:`atk`,pierce:.25}],anim:`thrust`,tag:`aoe`}),vault:U({id:`vault`,name:`Vault`,desc:`Uses your move, not your action: pole-vault to a tile up to 3 away, ignoring height. Then strike from up there.`,school:`skill`,mp:4,usesMove:!0,range:{kind:`magic`,min:1,max:3},area:W,target:`empty`,move:`vault`,effects:[],anim:`self`,tag:`move`}),pinDown:U({id:`pinDown`,name:`Pin Down`,desc:`A reaching thrust (2 tiles): 75 power and Root for 2 turns (70%).`,school:`physical`,mp:6,range:{kind:`reach`,min:1,max:2},area:W,target:`enemy`,effects:[{k:`damage`,power:75,stat:`atk`},{k:`status`,status:`root`,turns:2,chance:70}],anim:`thrust`,tag:`attack`}),setSpear:U({id:`setSpear`,name:`Set Spear`,desc:`Brace: the first enemy that moves within your reach before your next turn takes a free attack.`,school:`skill`,mp:5,range:pd,area:W,target:`self`,effects:[{k:`status`,status:`overwatch`,turns:1,chance:100,value:1,to:`self`}],anim:`self`,tag:`buff`}),cometDive:U({id:`cometDive`,name:`Comet Dive`,desc:`SURGE. Leap into the sky (untargetable), then land on a tile up to 5 away: 220 power there, 110 around it.`,school:`physical`,mp:0,surge:!0,castTime:8,range:{kind:`magic`,min:1,max:5},area:{shape:`radius`,size:1,vert:4},target:`tile`,move:`comet`,effects:[{k:`damage`,power:220,stat:`atk`,sure:!0}],anim:`slam`,tag:`aoe`}),volley:U({id:`volley`,name:`Volley`,desc:`Rain arrows on an area (radius 1, 60 power). Hits allies too.`,school:`physical`,mp:8,range:{kind:`arc`,min:2,max:5},area:{shape:`radius`,size:1},target:`tile`,effects:[{k:`damage`,power:60,stat:`atk`,to:`all`}],anim:`shoot`,projectile:`arrow`,tag:`aoe`}),fieldDressing:U({id:`fieldDressing`,name:`Field Dressing`,desc:`Bandage yourself or an adjacent ally: recover 25% of max HP.`,school:`skill`,mp:5,range:{kind:`melee`,min:0,max:1},area:W,target:`ally`,effects:[{k:`heal`,pct:.25}],anim:`self`,tag:`heal`}),aimedShot:U({id:`aimedShot`,name:`Aimed Shot`,desc:`Plant your feet and take the shot: 165 power, +15% crit, range 2-7. Only before moving; you can't move after.`,school:`physical`,mp:6,planted:!0,range:{kind:`arc`,min:2,max:7},area:W,target:`enemy`,effects:[{k:`damage`,power:165,stat:`atk`,critBonus:15}],anim:`shoot`,projectile:`arrow`,tag:`attack`}),pinningShot:U({id:`pinningShot`,name:`Pinning Shot`,desc:`An arrow through the boot: 70 power, Root for 2 turns (80%).`,school:`physical`,mp:6,range:{kind:`arc`,min:2,max:5},area:W,target:`enemy`,effects:[{k:`damage`,power:70,stat:`atk`},{k:`status`,status:`root`,turns:2,chance:80}],anim:`shoot`,projectile:`arrow`,tag:`attack`}),overwatchShot:U({id:`overwatchShot`,name:`Overwatch`,desc:`Watch the field: shoot the first enemy that moves within range before your next turn (up to 2 shots).`,school:`skill`,mp:6,range:pd,area:W,target:`self`,effects:[{k:`status`,status:`overwatch`,turns:1,chance:100,value:2,to:`self`}],anim:`self`,tag:`buff`}),deadeye:U({id:`deadeye`,name:`Deadeye`,desc:`SURGE. A perfect shot, range 2-8: 300 power, can't miss, ignores DEF and Barrier.`,school:`physical`,mp:0,surge:!0,range:{kind:`arc`,min:2,max:8},area:W,target:`enemy`,effects:[{k:`damage`,power:300,stat:`atk`,sure:!0,pierce:1,ignoreBarrier:!0}],anim:`shoot`,projectile:`arrow`,tag:`attack`}),snareTrap:U({id:`snareTrap`,name:`Snare Trap`,desc:`Hide a snare on a tile within 3. The first enemy to step on it takes 30 damage and is Rooted for 2 turns.`,school:`skill`,mp:5,range:{kind:`magic`,min:1,max:3},area:W,target:`empty`,effects:[{k:`tile`,effect:`snare`,duration:120,hidden:!0}],anim:`throw`,tag:`trap`}),fireTrap:U({id:`fireTrap`,name:`Fire Trap`,desc:`Hide a fire charge within 3. When an enemy steps on it, it bursts: 70 fire power around it and Burn.`,school:`skill`,mp:8,range:{kind:`magic`,min:1,max:3},area:W,target:`empty`,effects:[{k:`tile`,effect:`firetrap`,duration:120,hidden:!0}],anim:`throw`,tag:`trap`}),caltrops:U({id:`caltrops`,name:`Caltrops`,desc:`Scatter spikes over an area (radius 1, range 4). Enemies who enter take damage and Bleed. Lasts ~4 turns.`,school:`skill`,mp:6,range:{kind:`magic`,min:1,max:4},area:{shape:`radius`,size:1},target:`tile`,effects:[{k:`tile`,effect:`caltrops`,duration:40}],anim:`throw`,tag:`trap`}),netThrow:U({id:`netThrow`,name:`Net Throw`,desc:`Tangle a target (range 2-4): Slow for 2 turns and Root for 1 (90%).`,school:`skill`,mp:6,range:{kind:`arc`,min:1,max:4},area:W,target:`enemy`,effects:[{k:`status`,status:`slow`,turns:2,chance:90},{k:`status`,status:`root`,turns:1,chance:90}],anim:`throw`,projectile:`net`,tag:`debuff`}),killingField:U({id:`killingField`,name:`Killing Field`,desc:`SURGE. Seed every empty tile within 2 of a point (range 5) with hidden snares.`,school:`skill`,mp:0,surge:!0,range:{kind:`magic`,min:0,max:5},area:{shape:`radius`,size:2,vert:6},target:`tile`,effects:[{k:`special`,id:`trapField`}],anim:`throw`,tag:`trap`}),callWolf:U({id:`callWolf`,name:`Call Wolf`,desc:`Whistle up your wolf on an adjacent tile. Only one at a time.`,school:`skill`,mp:8,cooldown:4,range:{kind:`melee`,min:1,max:1},area:W,target:`empty`,effects:[{k:`summon`,what:`wolf`}],anim:`self`,tag:`summon`}),sicEm:U({id:`sicEm`,name:`Sic 'Em`,desc:`Your wolf dashes to an enemy within 5 of it and bites hard: 115 power and Bleed (60%). Doesn't use the wolf's turn.`,school:`skill`,mp:6,range:{kind:`magic`,min:1,max:8},area:W,target:`enemy`,effects:[{k:`special`,id:`sicEm`}],anim:`self`,tag:`attack`}),wildBond:U({id:`wildBond`,name:`Wild Bond`,desc:`You and your wolf recover 25% of max HP, wherever it is.`,school:`skill`,mp:8,cooldown:2,range:pd,area:W,target:`self`,effects:[{k:`heal`,pct:.25,to:`self`}],anim:`self`,tag:`heal`}),stampede:U({id:`stampede`,name:`Stampede`,desc:`SURGE. Spirit beasts charge down a 6-tile line: 160 power and knockback to every enemy in it.`,school:`physical`,mp:0,surge:!0,range:{kind:`reach`,min:1,max:6,vert:8},area:{shape:`line`,size:6,vert:8},target:`tile`,effects:[{k:`damage`,power:160,stat:`atk`,sure:!0},{k:`knockback`,dist:1}],anim:`shoot`,tag:`aoe`}),arcaneBolt:U({id:`arcaneBolt`,name:`Arcane Bolt`,desc:`A quick bolt of raw force (range 4, 80 power). Never misses.`,school:`spell`,mp:3,range:{kind:`magic`,min:1,max:4},area:W,target:`enemy`,effects:[{k:`damage`,power:80,stat:`mag`,element:`arcane`}],anim:`cast`,projectile:`orb`,element:`arcane`,tag:`attack`}),meditate:U({id:`meditate`,name:`Meditate`,desc:`Recover 35% of max MP and gain Ward for 1 turn.`,school:`skill`,mp:0,cooldown:3,range:pd,area:W,target:`self`,effects:[{k:`mp`,pct:.35,to:`self`},{k:`status`,status:`ward`,turns:1,chance:100,to:`self`}],anim:`self`,tag:`utility`}),fireball:U({id:`fireball`,name:`Fireball`,desc:`Charge 3: an exploding fireball (range 4, radius 1, 115 fire power, 35% Burn). Hits allies too.`,school:`spell`,mp:12,castTime:3,range:{kind:`magic`,min:1,max:4},area:{shape:`radius`,size:1,vert:2},target:`tile`,effects:[{k:`damage`,power:115,stat:`mag`,element:`fire`,to:`all`},{k:`status`,status:`burn`,turns:3,chance:35,to:`all`}],anim:`cast`,projectile:`fire`,element:`fire`,tag:`aoe`}),immolate:U({id:`immolate`,name:`Immolate`,desc:`Set a target ablaze (range 4): 70 fire power and Burn for 3 turns.`,school:`spell`,mp:8,range:{kind:`magic`,min:1,max:4},area:W,target:`enemy`,effects:[{k:`damage`,power:70,stat:`mag`,element:`fire`},{k:`status`,status:`burn`,turns:3,chance:100}],anim:`cast`,projectile:`fire`,element:`fire`,tag:`attack`}),wildfire:U({id:`wildfire`,name:`Wildfire`,desc:`Ignite the ground (range 4, radius 1) for ~3 turns. Anyone entering or starting a turn there catches Burn.`,school:`spell`,mp:10,range:{kind:`magic`,min:1,max:4},area:{shape:`radius`,size:1,vert:2},target:`tile`,effects:[{k:`tile`,effect:`fire`,duration:30},{k:`status`,status:`burn`,turns:2,chance:100,to:`all`}],anim:`cast`,element:`fire`,tag:`aoe`}),meteor:U({id:`meteor`,name:`Meteor`,desc:`SURGE. Charge 10: call down a meteor (range 6, radius 2, 220 fire power). Hits allies too.`,school:`spell`,mp:0,surge:!0,castTime:10,range:{kind:`magic`,min:1,max:6},area:{shape:`radius`,size:2,vert:4},target:`tile`,effects:[{k:`damage`,power:220,stat:`mag`,element:`fire`,to:`all`},{k:`status`,status:`burn`,turns:3,chance:60,to:`all`}],anim:`cast`,element:`fire`,tag:`aoe`}),frostLance:U({id:`frostLance`,name:`Frost Lance`,desc:`A spear of ice through 4 tiles in a line (95 frost power).`,school:`spell`,mp:10,range:{kind:`reach`,min:1,max:4,vert:6},area:{shape:`line`,size:4,vert:6},target:`tile`,effects:[{k:`damage`,power:95,stat:`mag`,element:`frost`}],anim:`cast`,element:`frost`,tag:`aoe`}),glacialPrison:U({id:`glacialPrison`,name:`Glacial Prison`,desc:`Charge 3: encase a target (range 4) in ice: 45 frost power and Frozen (75%). Follows the target.`,school:`spell`,mp:12,cooldown:2,castTime:3,follow:!0,range:{kind:`magic`,min:1,max:4},area:W,target:`enemy`,effects:[{k:`damage`,power:45,stat:`mag`,element:`frost`},{k:`status`,status:`frozen`,turns:1,chance:75}],anim:`cast`,element:`frost`,tag:`debuff`}),iceWall:U({id:`iceWall`,name:`Ice Pillar`,desc:`Raise a 4-level pillar of ice on an empty tile (range 4) for ~4 turns. Block paths and shots, or make high ground.`,school:`spell`,mp:8,range:{kind:`magic`,min:1,max:4},area:W,target:`empty`,effects:[{k:`tile`,effect:`icewall`,duration:40,amount:4}],anim:`cast`,element:`frost`,tag:`utility`}),absoluteZero:U({id:`absoluteZero`,name:`Absolute Zero`,desc:`SURGE. Charge 5: everything within 3 of you freezes (120 frost power, Frozen). Spares allies.`,school:`spell`,mp:0,surge:!0,castTime:5,range:pd,area:{shape:`radius`,size:3,vert:6,excludeSelf:!0},target:`self`,effects:[{k:`damage`,power:120,stat:`mag`,element:`frost`},{k:`status`,status:`frozen`,turns:1,chance:100}],anim:`cast`,element:`frost`,tag:`aoe`}),chainLightning:U({id:`chainLightning`,name:`Chain Lightning`,desc:`Lightning that jumps to 2 more enemies within 2 tiles (90 storm power, -20% per jump). Wet targets take +50% and extend the chain.`,school:`spell`,mp:12,range:{kind:`magic`,min:1,max:4},area:W,target:`enemy`,effects:[{k:`damage`,power:90,stat:`mag`,element:`storm`},{k:`chain`,bounces:2,range:2,falloff:.8}],anim:`cast`,element:`storm`,tag:`attack`}),thunderclap:U({id:`thunderclap`,name:`Thunderclap`,desc:`A shockwave around you: 70 storm power and knockback to adjacent enemies.`,school:`spell`,mp:8,range:pd,area:{shape:`radius`,size:1,excludeSelf:!0},target:`self`,effects:[{k:`damage`,power:70,stat:`mag`,element:`storm`},{k:`knockback`,dist:1,fromCenter:!0}],anim:`cast`,element:`storm`,tag:`aoe`}),tailwind:U({id:`tailwind`,name:`Tailwind`,desc:`Grant an ally Haste for 3 turns (range 4).`,school:`spell`,mp:8,range:{kind:`magic`,min:0,max:4},area:W,target:`ally`,effects:[{k:`status`,status:`haste`,turns:3,chance:100}],anim:`cast`,element:`storm`,tag:`buff`}),tempest:U({id:`tempest`,name:`Tempest`,desc:`SURGE. Charge 5: a storm over an area (range 6, radius 2). Each enemy inside is struck twice (90 storm power).`,school:`spell`,mp:0,surge:!0,castTime:5,range:{kind:`magic`,min:1,max:6},area:{shape:`radius`,size:2,vert:5},target:`tile`,effects:[{k:`damage`,power:90,stat:`mag`,element:`storm`,hits:2}],anim:`cast`,element:`storm`,tag:`aoe`}),mend:U({id:`mend`,name:`Mend`,desc:`Heal an ally (range 4, 100 power).`,school:`spell`,mp:7,range:{kind:`magic`,min:0,max:4},area:W,target:`ally`,effects:[{k:`heal`,power:100}],anim:`cast`,element:`radiant`,tag:`heal`}),purify:U({id:`purify`,name:`Purify`,desc:`Remove every debuff from an ally (range 4) and heal a little.`,school:`spell`,mp:6,range:{kind:`magic`,min:0,max:4},area:W,target:`ally`,effects:[{k:`cleanse`,kind:`debuff`},{k:`heal`,power:30}],anim:`cast`,element:`radiant`,tag:`heal`}),renew:U({id:`renew`,name:`Renew`,desc:`Regen on an ally for 3 turns: 10% of max HP at the start of each of its turns.`,school:`spell`,mp:7,range:{kind:`magic`,min:0,max:4},area:W,target:`ally`,effects:[{k:`status`,status:`regen`,turns:3,chance:100}],anim:`cast`,element:`radiant`,tag:`heal`}),sanctuary:U({id:`sanctuary`,name:`Sanctuary`,desc:`Charge 3: heal every ally in an area (range 4, radius 1, 85 power).`,school:`spell`,mp:13,castTime:3,range:{kind:`magic`,min:0,max:4},area:{shape:`radius`,size:1,vert:3},target:`tile`,effects:[{k:`heal`,power:85,to:`ally`}],anim:`cast`,element:`radiant`,tag:`heal`}),revive:U({id:`revive`,name:`Revive`,desc:`Bring a fallen ally back (range 3) with 35% HP.`,school:`spell`,mp:16,cooldown:2,range:{kind:`magic`,min:1,max:3},area:W,target:`koAlly`,effects:[{k:`revive`,pct:.35}],anim:`cast`,element:`radiant`,tag:`heal`}),miracle:U({id:`miracle`,name:`Miracle`,desc:`SURGE. Every ally on the field recovers half its max HP; fallen allies rise with half HP.`,school:`spell`,mp:0,surge:!0,range:pd,area:{shape:`allies`,size:0},target:`self`,effects:[{k:`revive`,pct:.5},{k:`heal`,pct:.5,to:`ally`}],anim:`cast`,element:`radiant`,tag:`heal`}),holyStrike:U({id:`holyStrike`,name:`Holy Strike`,desc:`A radiant blow (120 power) that heals you for 30% of the damage.`,school:`physical`,mp:4,range:fd,area:W,target:`enemy`,effects:[{k:`damage`,power:120,stat:`atk`,element:`radiant`,lifesteal:.3}],anim:`swing`,element:`radiant`,tag:`attack`}),consecrate:U({id:`consecrate`,name:`Consecrate`,desc:`Bless the ground around you (radius 1) for ~4 turns: your allies regenerate there, enemies are scorched.`,school:`spell`,mp:10,range:pd,area:{shape:`radius`,size:1,vert:3},target:`self`,effects:[{k:`tile`,effect:`holy`,duration:40}],anim:`cast`,element:`radiant`,tag:`buff`}),judgment:U({id:`judgment`,name:`Judgment`,desc:`A lance of light (range 4, 90 radiant power, x1.5 against debuffed targets).`,school:`spell`,mp:9,range:{kind:`magic`,min:1,max:4},area:W,target:`enemy`,effects:[{k:`damage`,power:90,stat:`mag`,element:`radiant`,bonusVsDebuffed:1.5}],anim:`cast`,projectile:`radiant`,element:`radiant`,tag:`attack`}),sunfall:U({id:`sunfall`,name:`Sunfall`,desc:`SURGE. Charge 4: a pillar of sunlight (range 5, radius 1): 200 radiant power and Blind. Spares allies.`,school:`spell`,mp:0,surge:!0,castTime:4,range:{kind:`magic`,min:1,max:5},area:{shape:`radius`,size:1,vert:4},target:`tile`,effects:[{k:`damage`,power:200,stat:`mag`,element:`radiant`},{k:`status`,status:`blind`,turns:2,chance:100}],anim:`cast`,element:`radiant`,tag:`aoe`}),curse:U({id:`curse`,name:`Curse`,desc:`Mark a target for 3 turns (+25% damage taken) and Silence it for 2 (80%).`,school:`spell`,mp:8,range:{kind:`magic`,min:1,max:4},area:W,target:`enemy`,effects:[{k:`status`,status:`marked`,turns:3,chance:100},{k:`status`,status:`silence`,turns:2,chance:80}],anim:`cast`,element:`shadow`,tag:`debuff`}),drainLife:U({id:`drainLife`,name:`Drain Life`,desc:`Siphon life (range 3, 95 shadow power); heal for half the damage.`,school:`spell`,mp:9,range:{kind:`magic`,min:1,max:3},area:W,target:`enemy`,effects:[{k:`damage`,power:95,stat:`mag`,element:`shadow`,lifesteal:.5}],anim:`cast`,projectile:`shadow`,element:`shadow`,tag:`attack`}),plague:U({id:`plague`,name:`Plague`,desc:`A sickly cloud (range 4, radius 1): 35 shadow power and Poison for 3 turns (85%). Spares allies.`,school:`spell`,mp:11,range:{kind:`magic`,min:1,max:4},area:{shape:`radius`,size:1,vert:3},target:`tile`,effects:[{k:`damage`,power:35,stat:`mag`,element:`shadow`},{k:`status`,status:`poison`,turns:3,chance:85}],anim:`cast`,element:`shadow`,tag:`aoe`}),soulRend:U({id:`soulRend`,name:`Soul Rend`,desc:`SURGE. Tear at a target's soul (range 4): 60 shadow power plus 20% of its max HP for every debuff it has.`,school:`spell`,mp:0,surge:!0,range:{kind:`magic`,min:1,max:4},area:W,target:`enemy`,effects:[{k:`damage`,power:60,stat:`mag`,element:`shadow`,perDebuffPct:.2,sure:!0}],anim:`cast`,projectile:`shadow`,element:`shadow`,tag:`attack`}),pilfer:U({id:`pilfer`,name:`Pilfer`,desc:`Lift an item from the enemy's pouch and strip one buff off the target.`,school:`skill`,mp:2,range:fd,area:W,target:`enemy`,effects:[{k:`steal`},{k:`cleanse`,kind:`buff`,count:1,to:`enemy`}],anim:`thrust`,tag:`utility`}),sprint:U({id:`sprint`,name:`Sprint`,desc:`+3 move this turn. Use it before moving.`,school:`skill`,mp:3,range:pd,area:W,target:`self`,move:`sprint`,effects:[],anim:`self`,tag:`move`}),backstab:U({id:`backstab`,name:`Backstab`,desc:`130 power; from behind it deals x1.75 damage instead of the usual x1.35.`,school:`physical`,mp:6,range:fd,area:W,target:`enemy`,effects:[{k:`damage`,power:130,stat:`atk`,backMult:1.75}],anim:`thrust`,tag:`attack`}),shadowstep:U({id:`shadowstep`,name:`Shadowstep`,desc:`Uses your move, not your action: melt into shadow and reappear behind an enemy within 5, facing its back.`,school:`skill`,mp:8,cooldown:2,usesMove:!0,range:{kind:`magic`,min:1,max:5},area:W,target:`enemy`,move:`shadowstep`,effects:[],anim:`self`,tag:`move`}),vanish:U({id:`vanish`,name:`Vanish`,desc:`Stealth for 2 turns: enemies can't single you out until you attack or get caught in an area.`,school:`skill`,mp:7,cooldown:3,range:pd,area:W,target:`self`,effects:[{k:`status`,status:`stealth`,turns:2,chance:100,to:`self`}],anim:`self`,tag:`buff`}),deathBlossom:U({id:`deathBlossom`,name:`Death Blossom`,desc:`SURGE. A flurry of killing cuts: 260 power, always crits, and Bleed.`,school:`physical`,mp:0,surge:!0,range:fd,area:W,target:`enemy`,effects:[{k:`damage`,power:260,stat:`atk`,alwaysCrit:!0,sure:!0},{k:`status`,status:`bleed`,turns:3,chance:100}],anim:`thrust`,tag:`attack`}),flurry:U({id:`flurry`,name:`Flurry`,desc:`Three quick thrusts at 52 power each (each can miss or crit).`,school:`physical`,mp:6,range:fd,area:W,target:`enemy`,effects:[{k:`damage`,power:52,stat:`atk`,hits:3}],anim:`thrust`,tag:`attack`}),riposteStance:U({id:`riposteStance`,name:`Riposte`,desc:`Until your next turn: +20 evasion and counter every melee attack against you.`,school:`skill`,mp:5,range:pd,area:W,target:`self`,effects:[{k:`status`,status:`riposte`,turns:1,chance:100,to:`self`}],anim:`self`,tag:`buff`}),feint:U({id:`feint`,name:`Feint`,desc:`A trick that turns the target around (it faces away from you) and Marks it for 1 turn. 40 power.`,school:`physical`,mp:4,range:fd,area:W,target:`enemy`,acc:100,effects:[{k:`damage`,power:40,stat:`atk`},{k:`faceAway`},{k:`status`,status:`marked`,turns:1,chance:100}],anim:`thrust`,tag:`debuff`}),bladeWaltz:U({id:`bladeWaltz`,name:`Blade Waltz`,desc:`SURGE. Dance through the crowd: every enemy within 2 takes two 80-power cuts.`,school:`physical`,mp:0,surge:!0,range:pd,area:{shape:`radius`,size:2,vert:3,excludeSelf:!0},target:`self`,effects:[{k:`damage`,power:80,stat:`atk`,hits:2}],anim:`swing`,tag:`aoe`}),blastCharge:U({id:`blastCharge`,name:`Blast Charge`,desc:`Lob a charge (range 2-4, radius 1): 80 fire power and knockback from the blast. Hits allies too.`,school:`physical`,mp:8,range:{kind:`arc`,min:2,max:4},area:{shape:`radius`,size:1,vert:2},target:`tile`,effects:[{k:`damage`,power:80,stat:`atk`,element:`fire`,sure:!0,to:`all`},{k:`knockback`,dist:1,fromCenter:!0,to:`all`}],anim:`throw`,projectile:`bomb`,element:`fire`,tag:`aoe`}),smokeBomb:U({id:`smokeBomb`,name:`Smoke Bomb`,desc:`A smoke cloud (range 2-4, radius 1) for ~3 turns: enemies inside are Blinded, allies inside gain Stealth, ranged shots into it falter.`,school:`skill`,mp:7,range:{kind:`arc`,min:1,max:4},area:{shape:`radius`,size:1,vert:2},target:`tile`,effects:[{k:`tile`,effect:`smoke`,duration:30},{k:`status`,status:`blind`,turns:2,chance:85,to:`enemy`},{k:`status`,status:`stealth`,turns:1,chance:100,to:`ally`}],anim:`throw`,projectile:`bomb`,tag:`utility`}),grapple:U({id:`grapple`,name:`Grapple Hook`,desc:`Fire a hook (range 2-5, clear line). At a tile: zip there, any height. At an enemy: yank it toward you.`,school:`skill`,mp:6,range:{kind:`direct`,min:2,max:5,vert:10},area:W,target:`tile`,move:`grapple`,effects:[],anim:`shoot`,projectile:`hook`,tag:`move`}),powderKeg:U({id:`powderKeg`,name:`Powder Keg`,desc:`SURGE. Charge 4: a huge barrel bomb (range 4, radius 2): 180 fire power, knockback and Burn. Hits allies too.`,school:`physical`,mp:0,surge:!0,castTime:4,range:{kind:`magic`,min:1,max:4},area:{shape:`radius`,size:2,vert:4},target:`tile`,effects:[{k:`damage`,power:180,stat:`atk`,element:`fire`,sure:!0,to:`all`},{k:`knockback`,dist:1,fromCenter:!0,to:`all`},{k:`status`,status:`burn`,turns:2,chance:70,to:`all`}],anim:`throw`,projectile:`bomb`,element:`fire`,tag:`aoe`}),bite:U({id:`bite`,name:`Bite`,desc:`Savage bite: 100 power, 30% Bleed.`,school:`physical`,mp:0,range:fd,area:W,target:`enemy`,effects:[{k:`damage`,power:100,stat:`atk`},{k:`status`,status:`bleed`,turns:2,chance:30}],anim:`bite`,tag:`attack`}),howl:U({id:`howl`,name:`Howl`,desc:`Allies within 2 gain Might for 2 turns.`,school:`skill`,mp:6,cooldown:3,range:pd,area:{shape:`radius`,size:2,vert:4},target:`self`,effects:[{k:`status`,status:`might`,turns:2,chance:100,to:`ally`}],anim:`self`,tag:`buff`}),pounce:U({id:`pounce`,name:`Pounce`,desc:`SURGE. Bound onto a target within 4 (any height) for 200 power and Stun.`,school:`physical`,mp:0,surge:!0,range:{kind:`magic`,min:1,max:4},area:W,target:`enemy`,move:`dash`,effects:[{k:`damage`,power:200,stat:`atk`,sure:!0},{k:`status`,status:`stun`,turns:1,chance:100}],anim:`bite`,tag:`attack`})};function hd(e){let t=md[e];if(!t)throw Error(`unknown ability ${e}`);return t}var gd={g:`grass`,d:`dirt`,s:`stone`,a:`sand`,n:`snow`,m:`moss`,b:`wood`,o:`obsidian`,i:`ice`,w:`water`,W:`deep`,l:`lava`,t:`thicket`,v:`void`},_d={t:`tree`,p:`pine`,s:`snowpine`,b:`bush`,r:`rock`,B:`boulder`,I:`pillar`,i:`brokenPillar`,f:`brazier`,F:`banner`,c:`crystal`,x:`crate`,o:`barrel`,w:`ruinWall`,k:`obsidianSpike`,d:`deadTree`};function vd(e){let t=e.slice().reverse().map(e=>e.split(``).reverse().join(``));return e.concat(t)}function yd(e){let t=e.heights[0].length;for(let n of[e.heights,e.terrain,e.props]){if(n.length!==e.heights.length)throw Error(`${e.id}: layers differ in row count`);for(let r of n)if(r.length!==t)throw Error(`${e.id}: row "${r}" is not ${t} wide`)}let n=vd(e.heights),r=vd(e.terrain),i=e.props,a=i.slice().reverse().map(e=>e.split(``).reverse().join(``).replace(/2/g,`1`)),o=i.concat(a),s=n.length,c=[],l=[],u=[],d=[[],[]];for(let i=0;i<s;i++){c.push([]),l.push([]),u.push([]);for(let a=0;a<t;a++){let t=n[i][a],s=parseInt(t,16);if(Number.isNaN(s))throw Error(`${e.id}: bad height '${t}'`);c[i].push(s);let f=gd[r[i][a]];if(!f)throw Error(`${e.id}: bad terrain '${r[i][a]}'`);l[i].push(f);let p=o[i][a];if(p===`1`?d[0].push({x:a,y:i}):p===`2`&&d[1].push({x:a,y:i}),u[i].push(p===`.`||p===`1`||p===`2`?null:_d[p]??null),p!==`.`&&p!==`1`&&p!==`2`&&!_d[p])throw Error(`${e.id}: bad prop '${p}'`)}}return d[0].sort((e,n)=>e.y-n.y||Math.abs(e.x-(t-1)/2)-Math.abs(n.x-(t-1)/2)),d[1].sort((e,n)=>n.y-e.y||Math.abs(e.x-(t-1)/2)-Math.abs(n.x-(t-1)/2)),{id:e.id,name:e.name,desc:e.desc,width:t,height:s,heights:c,terrain:l,props:u,deploy:d,look:e.look}}var bd=[yd({id:`colosseum`,name:`Ashgate Colosseum`,desc:`A sand pit ringed by stone stands, with a stepped dais in the middle. Corner towers give archers the best view.`,heights:[`444211112444`,`443211112344`,`332111111233`,`221111111122`,`111112211111`,`111123321111`],terrain:[`ssssaaaassss`,`ssssaaaassss`,`sssaaaaaasss`,`ssaaaaaaaass`,`aaaaassaaaaa`,`aaaassssaaaa`],props:[`F...2222...F`,`.....22.....`,`............`,`..I......I..`,`....f..f....`,`............`],look:{sky:15320986,fog:14727562,sun:16773328,sunIntensity:2.4,hemiSky:16773853,hemiGround:9071176,skirt:7033398,particles:`motes`}}),yd({id:`ford`,name:`Riverbend Ford`,desc:`A river splits the field. A stone causeway crosses the middle; shallow fords wrap around the edges. Lightning loves the water.`,heights:[`543222223344`,`443211122334`,`332211112233`,`222111111222`,`111112211111`,`000002200000`],terrain:[`tggggggggggt`,`ggggddgggggg`,`gttggddggggg`,`ggggggdggaag`,`aaaaabbaaaaa`,`wwWWWbbWWwww`],props:[`b..t2222...b`,`.....22.....`,`.bb.......t.`,`........r...`,`............`,`............`],look:{sky:11064560,fog:12115183,sun:16774880,sunIntensity:2.3,hemiSky:14216447,hemiGround:4876858,skirt:4930090,particles:`leaves`}}),yd({id:`ruins`,name:`Sunken Ruins`,desc:`Mossy ruins on a crumbling shelf. The chasms are bottomless: knock someone in and they're gone.`,heights:[`334222222222`,`332222222222`,`222222220222`,`222222220222`,`200222222222`,`222234432222`],terrain:[`sssmmssmmsss`,`ssmmssssmmss`,`smmsssssvsms`,`msssmmssvssm`,`svvssmmsssss`,`ssmsssssmsss`],props:[`c...2222....`,`.....22.....`,`..ww........`,`i.....I.....`,`..........x.`,`............`],look:{sky:9083576,fog:8227494,sun:14542591,sunIntensity:1.9,hemiSky:12110079,hemiGround:3820090,skirt:3816004,particles:`motes`}}),yd({id:`caldera`,name:`Emberfall Caldera`,desc:`Obsidian ridges over a river of lava. Crossing the lava is possible, but it hurts.`,heights:[`444333322222`,`445433222222`,`334322112222`,`222211001122`,`222210001222`,`333221000123`],terrain:[`ooooosssssss`,`ooooosssssos`,`oooossssssoo`,`ssssssllssoo`,`ssssolllosss`,`ooosssllloss`],props:[`....2222..d.`,`.....22.....`,`k.........k.`,`...f........`,`............`,`..c.........`],look:{sky:3810344,fog:4860452,sun:16763040,sunIntensity:1.9,hemiSky:11569792,hemiGround:2759194,skirt:2760222,particles:`embers`}}),yd({id:`ridge`,name:`Frostpine Ridge`,desc:`A rocky spine runs down the middle with a pass at each end. Frozen ponds below count as wet.`,heights:[`112234432211`,`111235532111`,`001122221100`,`000135631000`,`000136641000`,`001246631000`],terrain:[`nnnnssssnnnn`,`nnnnssssnnnn`,`nnnnnnnnnnnn`,`iiinssssnnnn`,`iiinssssnntn`,`iinnssssnnnn`],props:[`s...2222...s`,`.s...22...s.`,`............`,`........s...`,`..........b.`,`...........s`],look:{sky:13623534,fog:14411760,sun:16777215,sunIntensity:2.1,hemiSky:15266559,hemiGround:9083562,skirt:5923952,particles:`snow`}}),yd({id:`quarry`,name:`Quarry Steps`,desc:`Cut-stone terraces. Each side has a high perch over a cliff; the floor between is open and low.`,heights:[`777444321111`,`776443321111`,`444433211000`,`443322110000`,`222211100000`,`111110000000`],terrain:[`ssssssdddddd`,`ssssssdddddd`,`ssssssdddddd`,`ssssddddddaa`,`ddddddddaaaa`,`dddddaaaaaaa`],props:[`r...2222..x.`,`.....22....B`,`..........x.`,`......B.....`,`.x..........`,`........I...`],look:{sky:13162728,fog:13159632,sun:16774372,sunIntensity:2.3,hemiSky:15659775,hemiGround:6971474,skirt:5918790,particles:`none`}})];function xd(e){let t=bd.find(t=>t.id===e);if(!t)throw Error(`unknown arena ${e}`);return t}var Sd=e=>e,Cd={warrior:{id:`warrior`,name:`Warrior`,desc:`Front-line fighters in heavy armor. Tough, steady, and hard to get past.`,base:Sd({hp:150,mp:24,atk:20,mag:6,def:14,res:8,spd:9,move:4,jump:3,eva:5,crit:5}),weapons:[`sword`,`axe`,`spear`],armors:[`heavy`,`medium`],abilities:[`shove`,`secondWind`]},ranger:{id:`ranger`,name:`Ranger`,desc:`Archers and hunters. They want high ground and a clear shot.`,base:Sd({hp:118,mp:32,atk:18,mag:8,def:9,res:10,spd:10,move:4,jump:4,eva:12,crit:8}),weapons:[`bow`,`crossbow`,`dagger`],armors:[`medium`,`light`],abilities:[`volley`,`fieldDressing`]},mage:{id:`mage`,name:`Mage`,desc:`Fragile elemental casters. Big areas, charged spells, and a lot of MP.`,base:Sd({hp:102,mp:72,atk:6,mag:22,def:6,res:16,spd:9,move:3,jump:2,eva:5,crit:0}),weapons:[`staff`,`rod`],armors:[`robe`,`light`],abilities:[`arcaneBolt`,`meditate`]},cleric:{id:`cleric`,name:`Cleric`,desc:`Healers and battle-priests. Keep them alive and they keep everyone alive.`,base:Sd({hp:112,mp:62,atk:12,mag:18,def:9,res:16,spd:9,move:3,jump:2,eva:5,crit:3}),weapons:[`mace`,`staff`,`rod`],armors:[`robe`,`medium`],abilities:[`mend`,`purify`]},rogue:{id:`rogue`,name:`Rogue`,desc:`Fast, slippery skirmishers. They win by getting behind you.`,base:Sd({hp:104,mp:34,atk:17,mag:8,def:7,res:9,spd:12,move:5,jump:4,eva:18,crit:12}),weapons:[`dagger`,`rapier`,`crossbow`],armors:[`light`,`medium`],abilities:[`pilfer`,`sprint`]},beast:{id:`beast`,name:`Beast`,desc:`A summoned companion.`,base:Sd({hp:62,mp:20,atk:16,mag:4,def:6,res:6,spd:10,move:5,jump:4,eva:15,crit:8}),weapons:[`fang`],armors:[`light`],abilities:[`bite`,`howl`]}},wd=(e,t,n=null,r=null)=>({weapon:e,armor:t,acc1:n,acc2:r}),Td={vanguard:{id:`vanguard`,classId:`warrior`,name:`Vanguard`,tagline:`The wall`,desc:`A shield-bearer who holds the line. Enemies that step next to a Vanguard have to stop there.`,mods:{hp:35,def:5,atk:0,spd:-1,eva:-2},abilities:[`shieldBash`,`shieldWall`,`provoke`,`guardianStance`],passive:`holdTheLine`,surge:`bastion`,role:`tank`,defaultGear:wd(`ironSword`,`plateMail`,`lodestone`)},berserker:{id:`berserker`,classId:`warrior`,name:`Berserker`,tagline:`The axe in the storm`,desc:`Hits harder the more hurt it is. Leaps into the thick of it and swings wide.`,mods:{hp:10,atk:5,def:-3,crit:5},abilities:[`cleave`,`leapStrike`,`recklessBlow`,`warcry`],passive:`bloodlust`,surge:`rampage`,role:`striker`,defaultGear:wd(`handAxe`,`brigandine`,`warhorn`)},lancer:{id:`lancer`,classId:`warrior`,name:`Lancer`,tagline:`Death from above`,desc:`A spear fighter who vaults to high ground and strikes down from it with double the height bonus.`,mods:{atk:2,jump:2,def:-2},abilities:[`skewer`,`pinDown`,`vault`,`setSpear`],passive:`plunge`,surge:`cometDive`,role:`striker`,defaultGear:wd(`ashSpear`,`brigandine`,`springheels`)},marksman:{id:`marksman`,classId:`ranger`,name:`Marksman`,tagline:`One shot`,desc:`A sniper. Gains range from every level of height, and plants for devastating aimed shots.`,mods:{atk:1,crit:5,hp:-6},abilities:[`aimedShot`,`pinningShot`,`overwatchShot`],passive:`eaglesPerch`,surge:`deadeye`,role:`ranged`,defaultGear:wd(`huntersBow`,`wayfarerLeathers`,`eagleLens`)},trapper:{id:`trapper`,classId:`ranger`,name:`Trapper`,tagline:`Watch your step`,desc:`Seeds the field with hidden snares, fire charges and caltrops, then punishes whoever gets caught.`,mods:{mp:10,spd:1,eva:3},abilities:[`snareTrap`,`fireTrap`,`caltrops`,`netThrow`],passive:`quarry`,surge:`killingField`,role:`support`,defaultGear:wd(`lightCrossbow`,`wayfarerLeathers`,`sylvanCharm`)},beastmaster:{id:`beastmaster`,classId:`ranger`,name:`Beastmaster`,tagline:`Never alone`,desc:`Fights alongside a wolf that takes its own turns. The two of them hit harder together.`,mods:{hp:8,atk:1},abilities:[`sicEm`,`callWolf`,`wildBond`],passive:`packTactics`,surge:`stampede`,role:`ranged`,defaultGear:wd(`huntersBow`,`brigandine`,`verdantRing`)},pyromancer:{id:`pyromancer`,classId:`mage`,name:`Pyromancer`,tagline:`Everything burns`,desc:`Area fire, burning ground and damage over time. Fire hits burning targets 40% harder.`,mods:{mag:5,hp:4},resist:{fire:30},abilities:[`fireball`,`immolate`,`wildfire`],passive:`kindling`,surge:`meteor`,role:`caster`,defaultGear:wd(`cinderStaff`,`apprenticeRobe`,`manaPrism`)},cryomancer:{id:`cryomancer`,classId:`mage`,name:`Cryomancer`,tagline:`Hold still`,desc:`Control: freezes targets solid, chills them slow, and raises ice pillars to wall off or climb.`,mods:{mag:1,res:3,hp:6},resist:{frost:30},abilities:[`frostLance`,`glacialPrison`,`iceWall`],passive:`frostbite`,surge:`absoluteZero`,role:`caster`,defaultGear:wd(`rimeStaff`,`frostweave`,`mirrorBrooch`)},stormcaller:{id:`stormcaller`,classId:`mage`,name:`Stormcaller`,tagline:`Ride the lightning`,desc:`Chain lightning that loves water, shockwaves that clear space, and Haste for allies.`,mods:{spd:1,mag:1},resist:{storm:30},abilities:[`chainLightning`,`thunderclap`,`tailwind`],passive:`conductive`,surge:`tempest`,role:`caster`,defaultGear:wd(`thunderRod`,`apprenticeRobe`,`hourglass`)},oracle:{id:`oracle`,classId:`cleric`,name:`Oracle`,tagline:`Not today`,desc:`The best healer: regen, area heals and revives. Overhealing turns into a barrier.`,mods:{mag:2,mp:10},abilities:[`renew`,`sanctuary`,`revive`],passive:`overflow`,surge:`miracle`,role:`healer`,defaultGear:wd(`dawnwoodStaff`,`apprenticeRobe`,`emberPinion`)},templar:{id:`templar`,classId:`cleric`,name:`Templar`,tagline:`Faith with a mace`,desc:`A battle-priest in heavy armor. Radiant blows that heal it, holy ground, and judgment from afar.`,mods:{hp:28,atk:7,def:4,mag:4,mp:-5},abilities:[`holyStrike`,`judgment`,`consecrate`],passive:`armorOfFaith`,surge:`sunfall`,role:`striker`,extraArmors:[`heavy`],defaultGear:wd(`sunhammer`,`plateMail`,`purityMedal`)},hexer:{id:`hexer`,classId:`cleric`,name:`Hexer`,tagline:`Misery loves company`,desc:`A dark cleric of curses and plague. Every debuff on a target makes its spells hit harder.`,mods:{mag:5,hp:2},resist:{shadow:30},abilities:[`curse`,`drainLife`,`plague`],passive:`malice`,surge:`soulRend`,role:`caster`,defaultGear:wd(`gravecallRod`,`apprenticeRobe`,`manaPrism`)},assassin:{id:`assassin`,classId:`rogue`,name:`Assassin`,tagline:`Behind you`,desc:`Shadowsteps behind a target and backstabs for double damage. Crits debuffed targets far more often.`,mods:{atk:3,crit:8,hp:8,def:1},abilities:[`backstab`,`shadowstep`,`vanish`],passive:`opportunist`,surge:`deathBlossom`,role:`striker`,defaultGear:wd(`dirk`,`shadowSilk`,`luckyCoin`)},duelist:{id:`duelist`,classId:`rogue`,name:`Duelist`,tagline:`En garde`,desc:`A fencer who dodges, counters melee attacks, and turns enemies around to expose their backs.`,mods:{eva:10,atk:2,hp:16,def:2},abilities:[`flurry`,`riposteStance`,`feint`],passive:`enGarde`,surge:`bladeWaltz`,role:`striker`,defaultGear:wd(`rapier`,`paddedJerkin`,`striders`)},saboteur:{id:`saboteur`,classId:`rogue`,name:`Saboteur`,tagline:`Stand back`,desc:`Bombs, smoke, and a grappling hook. Throws items four tiles and makes them 50% stronger.`,mods:{atk:1,mp:8,hp:4},abilities:[`blastCharge`,`smokeBomb`,`grapple`],passive:`quartermaster`,surge:`powderKeg`,role:`ranged`,defaultGear:wd(`lightCrossbow`,`travelersGarb`,`spikedPauldrons`)},wolf:{id:`wolf`,classId:`beast`,name:`Wolf`,tagline:`Good dog`,desc:`The Beastmaster's companion. Fast, bites to make wounds bleed, and howls to rally allies.`,mods:{},abilities:[],passive:`packTactics`,surge:`pounce`,role:`beast`,defaultGear:wd(`wolfFang`,`wolfHide`)}},Ed={holdTheLine:{id:`holdTheLine`,name:`Hold the Line`,desc:`Enemies that move next to you must stop there.`},bloodlust:{id:`bloodlust`,name:`Bloodlust`,desc:`Deal up to +50% damage as your HP drops.`},plunge:{id:`plunge`,name:`Plunge`,desc:`Height bonuses on your attacks are doubled.`},eaglesPerch:{id:`eaglesPerch`,name:`Eagle's Perch`,desc:`Shots gain +1 range per level above the target (not per 2), and double the height damage bonus.`},quarry:{id:`quarry`,name:`Quarry`,desc:`+30% damage against Rooted or Slowed targets. Your traps are hidden from enemies.`},packTactics:{id:`packTactics`,name:`Pack Tactics`,desc:`Beastmaster and wolf deal +25% damage to a target standing next to the other.`},kindling:{id:`kindling`,name:`Kindling`,desc:`Fire damage +40% against Burning targets.`},frostbite:{id:`frostbite`,name:`Frostbite`,desc:`Frost damage also Slows for 1 turn (60%).`},conductive:{id:`conductive`,name:`Conductive`,desc:`Storm damage against wet targets is +100% instead of +50%. Chains jump once more.`},overflow:{id:`overflow`,name:`Overflow`,desc:`Your overhealing becomes a Barrier (up to 20% of the target's max HP).`},armorOfFaith:{id:`armorOfFaith`,name:`Armor of Faith`,desc:`Can wear heavy armor. Immune to Silence.`},malice:{id:`malice`,name:`Malice`,desc:`+15% damage for each debuff on the target.`},opportunist:{id:`opportunist`,name:`Opportunist`,desc:`+30% crit chance against debuffed targets. +1 move while in Stealth.`},enGarde:{id:`enGarde`,name:`En Garde`,desc:`35% chance to counter melee attacks.`},quartermaster:{id:`quartermaster`,name:`Quartermaster`,desc:`Items reach 4 tiles and are 50% stronger.`},oath:{id:`oath`,name:`Oath`,desc:`+15% damage while an ally is adjacent.`},cleaving:{id:`cleaving`,name:`Cleaving`,desc:`Basic attacks hit the three tiles in front.`},longReach:{id:`longReach`,name:`Long Reach`,desc:`Basic attacks reach 3 tiles.`},doubleShot:{id:`doubleShot`,name:`Double Shot`,desc:`Basic attacks fire twice at 65% power.`},fireAffinity:{id:`fireAffinity`,name:`Fire Affinity`,desc:`Fire damage +20%.`},frostAffinity:{id:`frostAffinity`,name:`Frost Affinity`,desc:`Frost damage +20%.`},stormAffinity:{id:`stormAffinity`,name:`Storm Affinity`,desc:`Storm damage +15% and chains jump once more.`},shadowAffinity:{id:`shadowAffinity`,name:`Shadow Affinity`,desc:`Shadow damage +20%.`},healAffinity:{id:`healAffinity`,name:`Benediction`,desc:`Healing you do +20%.`},manaThrift:{id:`manaThrift`,name:`Mana Thrift`,desc:`Abilities cost 25% less MP.`},counter:{id:`counter`,name:`Parry`,desc:`25% chance to counter melee attacks.`},anchored:{id:`anchored`,name:`Anchored`,desc:`Can't be knocked back or pulled.`},thorns:{id:`thorns`,name:`Thorns`,desc:`Melee attackers take 20% of the damage they deal to you.`},startStealth:{id:`startStealth`,name:`Shadowed`,desc:`Start the battle in Stealth.`},featherfall:{id:`featherfall`,name:`Featherfall`,desc:`No fall damage.`},autoRevive:{id:`autoRevive`,name:`Rebirth`,desc:`Once per battle, rise from a KO with 30% HP.`},surgeBoost:{id:`surgeBoost`,name:`Battle Rhythm`,desc:`The Surge gauge fills 50% faster.`},startHaste:{id:`startHaste`,name:`Head Start`,desc:`Start the battle with Haste for 2 turns.`},lifesteal:{id:`lifesteal`,name:`Bloodthirst`,desc:`Heal for 20% of physical damage you deal.`},spellguard:{id:`spellguard`,name:`Spellguard`,desc:`The first harmful spell that hits you each battle is negated.`},farsight:{id:`farsight`,name:`Farsight`,desc:`+1 range on shots, and ignore cover.`},pathfinder:{id:`pathfinder`,name:`Pathfinder`,desc:`Rough terrain (water, thicket, lava) costs only 1 move.`},purity:{id:`purity`,name:`Purity`,desc:`Immune to Poison, Burn and Bleed.`},steadfast:{id:`steadfast`,name:`Steadfast`,desc:`Immune to Stun, Frozen and Taunt.`},quickdraw:{id:`quickdraw`,name:`Quickdraw`,desc:`Counters and overwatch shots deal +50% damage.`},fury:{id:`fury`,name:`Fury`,desc:`Deal 25% more damage, take 20% more.`},brutal:{id:`brutal`,name:`Brutal`,desc:`Your knockbacks push 1 tile farther and collisions hurt 50% more.`},markingShots:{id:`markingShots`,name:`Hunter's Mark`,desc:`Basic attacks Mark the target for 1 turn.`},startRegen:{id:`startRegen`,name:`Verdant`,desc:`Start the battle with Regen for 3 turns.`},windstep:{id:`windstep`,name:`Windstep`,desc:`+2 move when you act before moving.`}};function Dd(e){return Object.values(Td).filter(t=>t.classId===e)}var Od=[`warrior`,`ranger`,`mage`,`cleric`,`rogue`],kd={sword:{range:{kind:`melee`,min:1,max:1},anim:`swing`,label:`Melee`},axe:{range:{kind:`melee`,min:1,max:1},anim:`swing`,label:`Melee`},spear:{range:{kind:`reach`,min:1,max:2},anim:`thrust`,label:`Reach 2`},bow:{range:{kind:`arc`,min:2,max:5},anim:`shoot`,projectile:`arrow`,label:`Arc 2-5`},crossbow:{range:{kind:`direct`,min:1,max:4},anim:`shoot`,projectile:`bolt`,label:`Direct 1-4`},staff:{range:{kind:`melee`,min:1,max:1},anim:`swing`,label:`Melee`},rod:{range:{kind:`melee`,min:1,max:1},anim:`swing`,label:`Melee`},mace:{range:{kind:`melee`,min:1,max:1},anim:`slam`,label:`Melee`},dagger:{range:{kind:`melee`,min:1,max:1},anim:`thrust`,backMult:1.6,label:`Melee, x1.6 from behind`},rapier:{range:{kind:`melee`,min:1,max:1},anim:`thrust`,label:`Melee`},fang:{range:{kind:`melee`,min:1,max:1},anim:`bite`,label:`Melee`}},Ad=e=>e,jd=e=>e,Md=e=>e,Nd={ironSword:Ad({id:`ironSword`,name:`Iron Sword`,kind:`sword`,desc:`Reliable steel.`,mods:{atk:12,crit:3}}),emberbrand:Ad({id:`emberbrand`,name:`Emberbrand`,kind:`sword`,desc:`Basic attacks deal fire damage and Burn 30% of the time.`,mods:{atk:12},element:`fire`,onHit:{status:`burn`,chance:30,turns:2}}),oathblade:Ad({id:`oathblade`,name:`Oathblade`,kind:`sword`,desc:`+15% damage while an ally stands next to you.`,mods:{atk:13,def:2},passives:[`oath`]}),handAxe:Ad({id:`handAxe`,name:`Hand Axe`,kind:`axe`,desc:`A heavy bearded axe.`,mods:{atk:15,crit:6}}),gutripper:Ad({id:`gutripper`,name:`Gutripper`,kind:`axe`,desc:`Basic attacks cause Bleed 40% of the time.`,mods:{atk:14,crit:4},onHit:{status:`bleed`,chance:40,turns:3}}),greatCleaver:Ad({id:`greatCleaver`,name:`Great Cleaver`,kind:`axe`,desc:`Basic attacks hit the three tiles in front. -1 speed.`,mods:{atk:17,spd:-1},passives:[`cleaving`]}),ashSpear:Ad({id:`ashSpear`,name:`Ash Spear`,kind:`spear`,desc:`Reaches 2 tiles in a line.`,mods:{atk:12}}),skyreachPike:Ad({id:`skyreachPike`,name:`Skyreach Pike`,kind:`spear`,desc:`Reaches 3 tiles.`,mods:{atk:11},passives:[`longReach`],range:{kind:`reach`,min:1,max:3}}),thunderPike:Ad({id:`thunderPike`,name:`Thunder Pike`,kind:`spear`,desc:`Basic attacks deal storm damage. +1 jump.`,mods:{atk:12,jump:1},element:`storm`}),huntersBow:Ad({id:`huntersBow`,name:`Hunter's Bow`,kind:`bow`,desc:`Lobbed shots, 2-5 tiles, more range from high ground.`,mods:{atk:11}}),ridgeLongbow:Ad({id:`ridgeLongbow`,name:`Ridge Longbow`,kind:`bow`,desc:`Range 2-6. -1 speed.`,mods:{atk:12,spd:-1},range:{kind:`arc`,min:2,max:6}}),viperBow:Ad({id:`viperBow`,name:`Viper Bow`,kind:`bow`,desc:`Basic attacks Poison 35% of the time.`,mods:{atk:10},onHit:{status:`poison`,chance:35,turns:3}}),lightCrossbow:Ad({id:`lightCrossbow`,name:`Light Crossbow`,kind:`crossbow`,desc:`Straight shots, 1-4 tiles, ignore 30% DEF. Needs a clear line.`,mods:{atk:13},pierce:.3}),arbalest:Ad({id:`arbalest`,name:`Arbalest`,kind:`crossbow`,desc:`Brutal bolts that ignore 50% DEF. -1 move.`,mods:{atk:18,move:-1},pierce:.5}),repeater:Ad({id:`repeater`,name:`Repeater`,kind:`crossbow`,desc:`Basic attacks fire twice at 65% power.`,mods:{atk:12},pierce:.3,passives:[`doubleShot`]}),oakStaff:Ad({id:`oakStaff`,name:`Oak Staff`,kind:`staff`,desc:`A sturdy staff that stores mana.`,mods:{atk:4,mag:9,mp:12}}),cinderStaff:Ad({id:`cinderStaff`,name:`Cinder Staff`,kind:`staff`,desc:`Fire damage +20%.`,mods:{atk:4,mag:10},passives:[`fireAffinity`]}),rimeStaff:Ad({id:`rimeStaff`,name:`Rimeheart Staff`,kind:`staff`,desc:`Frost damage +20%.`,mods:{atk:4,mag:10},passives:[`frostAffinity`]}),dawnwoodStaff:Ad({id:`dawnwoodStaff`,name:`Dawnwood Staff`,kind:`staff`,desc:`Healing +20%.`,mods:{atk:4,mag:9,mp:6},passives:[`healAffinity`]}),willowRod:Ad({id:`willowRod`,name:`Willow Rod`,kind:`rod`,desc:`A light focus for spells.`,mods:{atk:3,mag:13}}),thunderRod:Ad({id:`thunderRod`,name:`Thunderhead Rod`,kind:`rod`,desc:`Storm damage +15% and chains jump once more.`,mods:{atk:3,mag:12},passives:[`stormAffinity`]}),gravecallRod:Ad({id:`gravecallRod`,name:`Gravecall Rod`,kind:`rod`,desc:`Shadow damage +20%.`,mods:{atk:3,mag:12},passives:[`shadowAffinity`]}),echoRod:Ad({id:`echoRod`,name:`Rod of Echoes`,kind:`rod`,desc:`Abilities cost 25% less MP.`,mods:{atk:3,mag:10},passives:[`manaThrift`]}),ironMace:Ad({id:`ironMace`,name:`Iron Mace`,kind:`mace`,desc:`Flanged and honest.`,mods:{atk:11,mag:4}}),sunhammer:Ad({id:`sunhammer`,name:`Sunhammer`,kind:`mace`,desc:`Basic attacks deal radiant damage and Blind 15% of the time.`,mods:{atk:12,mag:6},element:`radiant`,onHit:{status:`blind`,chance:15,turns:2}}),skullcrusher:Ad({id:`skullcrusher`,name:`Skullcrusher`,kind:`mace`,desc:`Basic attacks Stun 15% of the time.`,mods:{atk:15},onHit:{status:`stun`,chance:15,turns:1}}),dirk:Ad({id:`dirk`,name:`Dirk`,kind:`dagger`,desc:`x1.6 damage from behind on basic attacks.`,mods:{atk:9,crit:10}}),shadowKris:Ad({id:`shadowKris`,name:`Kris of Shadows`,kind:`dagger`,desc:`Basic attacks deal shadow damage.`,mods:{atk:9,crit:14},element:`shadow`}),widowsFang:Ad({id:`widowsFang`,name:`Widow's Fang`,kind:`dagger`,desc:`Basic attacks Poison 40% of the time.`,mods:{atk:8,crit:10},onHit:{status:`poison`,chance:40,turns:3}}),rapier:Ad({id:`rapier`,name:`Rapier`,kind:`rapier`,desc:`Quick and precise.`,mods:{atk:11,eva:5,crit:8}}),swiftsting:Ad({id:`swiftsting`,name:`Swiftsting`,kind:`rapier`,desc:`+1 speed.`,mods:{atk:10,spd:1,eva:6}}),parryingBlade:Ad({id:`parryingBlade`,name:`Parrying Blade`,kind:`rapier`,desc:`25% chance to counter melee attacks.`,mods:{atk:10,eva:5},passives:[`counter`]}),wolfFang:Ad({id:`wolfFang`,name:`Fangs`,kind:`fang`,desc:`Teeth.`,mods:{atk:6}})},Pd={plateMail:jd({id:`plateMail`,name:`Plate Mail`,kind:`heavy`,desc:`Heavy steel plate.`,mods:{def:14,res:3,eva:-4}}),bastionPlate:jd({id:`bastionPlate`,name:`Bastion Plate`,kind:`heavy`,desc:`Can't be knocked back. -1 move.`,mods:{def:18,res:4,move:-1,eva:-5},passives:[`anchored`]}),sunforgedPlate:jd({id:`sunforgedPlate`,name:`Sunforged Plate`,kind:`heavy`,desc:`Radiant and shadow damage -30%.`,mods:{def:12,res:8,eva:-4},resist:{radiant:30,shadow:30}}),brigandine:jd({id:`brigandine`,name:`Brigandine`,kind:`medium`,desc:`Riveted plates over leather.`,mods:{def:9,res:4}}),drakescale:jd({id:`drakescale`,name:`Drakescale`,kind:`medium`,desc:`Fire damage -50%.`,mods:{def:8,res:5},resist:{fire:50}}),thornmail:jd({id:`thornmail`,name:`Thornmail`,kind:`medium`,desc:`Melee attackers take 20% of the damage they deal.`,mods:{def:8,res:3},passives:[`thorns`]}),wayfarerLeathers:jd({id:`wayfarerLeathers`,name:`Wayfarer Leathers`,kind:`medium`,desc:`+1 jump.`,mods:{def:7,res:4,jump:1,eva:3}}),travelersGarb:jd({id:`travelersGarb`,name:`Traveler's Garb`,kind:`light`,desc:`+1 move.`,mods:{def:5,res:4,move:1}}),shadowSilk:jd({id:`shadowSilk`,name:`Shadow Silk`,kind:`light`,desc:`Start the battle in Stealth.`,mods:{def:4,res:4,eva:8},passives:[`startStealth`]}),paddedJerkin:jd({id:`paddedJerkin`,name:`Padded Jerkin`,kind:`light`,desc:`+12 HP.`,mods:{def:6,res:3,hp:12}}),apprenticeRobe:jd({id:`apprenticeRobe`,name:`Apprentice Robe`,kind:`robe`,desc:`+15 MP.`,mods:{def:3,res:10,mp:15}}),starVestment:jd({id:`starVestment`,name:`Vestment of Stars`,kind:`robe`,desc:`+5 MAG.`,mods:{def:3,res:12,mag:5}}),frostweave:jd({id:`frostweave`,name:`Frostweave`,kind:`robe`,desc:`Frost -50%, storm -25%.`,mods:{def:3,res:9},resist:{frost:50,storm:25}}),saintsRaiment:jd({id:`saintsRaiment`,name:`Saint's Raiment`,kind:`robe`,desc:`Healing you do +20%.`,mods:{def:4,res:11},passives:[`healAffinity`]}),wolfHide:jd({id:`wolfHide`,name:`Thick Hide`,kind:`light`,desc:`Fur.`,mods:{def:3,res:2}})},Fd={striders:Md({id:`striders`,name:`Striding Boots`,desc:`+1 move.`,mods:{move:1}}),springheels:Md({id:`springheels`,name:`Springheel Boots`,desc:`+2 jump and no fall damage.`,mods:{jump:2},passives:[`featherfall`]}),lodestone:Md({id:`lodestone`,name:`Lodestone Amulet`,desc:`Can't be knocked back or pulled.`,passives:[`anchored`]}),emberPinion:Md({id:`emberPinion`,name:`Ember Pinion`,desc:`Once per battle, rise from a KO with 30% HP.`,passives:[`autoRevive`]}),warhorn:Md({id:`warhorn`,name:`War Horn`,desc:`The Surge gauge fills 50% faster.`,passives:[`surgeBoost`]}),hourglass:Md({id:`hourglass`,name:`Hourglass Charm`,desc:`+1 speed, and start with Haste for 2 turns.`,mods:{spd:1},passives:[`startHaste`]}),bloodstone:Md({id:`bloodstone`,name:`Bloodstone Ring`,desc:`Heal for 20% of physical damage dealt.`,passives:[`lifesteal`]}),mirrorBrooch:Md({id:`mirrorBrooch`,name:`Mirror Brooch`,desc:`The first harmful spell that hits you is negated.`,passives:[`spellguard`]}),eagleLens:Md({id:`eagleLens`,name:`Eagle-Eye Lens`,desc:`+1 range on shots, and ignore cover.`,passives:[`farsight`]}),luckyCoin:Md({id:`luckyCoin`,name:`Lucky Coin`,desc:`+10 crit, +5 evasion.`,mods:{crit:10,eva:5}}),sylvanCharm:Md({id:`sylvanCharm`,name:`Sylvan Charm`,desc:`Water, thicket and lava cost only 1 move.`,passives:[`pathfinder`]}),purityMedal:Md({id:`purityMedal`,name:`Saint's Medallion`,desc:`Immune to Poison, Burn and Bleed.`,passives:[`purity`]}),ironWill:Md({id:`ironWill`,name:`Iron Will Band`,desc:`Immune to Stun, Frozen and Taunt.`,passives:[`steadfast`]}),quickQuiver:Md({id:`quickQuiver`,name:`Quickdraw Quiver`,desc:`Counters and overwatch shots deal +50%.`,passives:[`quickdraw`]}),manaPrism:Md({id:`manaPrism`,name:`Mana Prism`,desc:`+10 MP, abilities cost 25% less MP.`,mods:{mp:10},passives:[`manaThrift`]}),furyTorc:Md({id:`furyTorc`,name:`Torc of Fury`,desc:`Deal 25% more damage, take 20% more.`,passives:[`fury`]}),spikedPauldrons:Md({id:`spikedPauldrons`,name:`Spiked Pauldrons`,desc:`Your knockbacks push 1 tile farther; collisions hurt 50% more.`,passives:[`brutal`]}),huntersTalisman:Md({id:`huntersTalisman`,name:`Hunter's Talisman`,desc:`Basic attacks Mark the target for 1 turn.`,passives:[`markingShots`]}),verdantRing:Md({id:`verdantRing`,name:`Verdant Ring`,desc:`+10 HP, start with Regen for 3 turns.`,mods:{hp:10},passives:[`startRegen`]}),windFeather:Md({id:`windFeather`,name:`Wind Feather`,desc:`+2 move when you act before moving.`,passives:[`windstep`]})};function Id(e){let t=Nd[e];if(!t)throw Error(`unknown weapon ${e}`);return t}function Ld(e){let t=Pd[e];if(!t)throw Error(`unknown armor ${e}`);return t}function Rd(e){let t=Fd[e];if(!t)throw Error(`unknown accessory ${e}`);return t}var zd=e=>e,Bd={kind:`magic`,min:0,max:1},Vd={shape:`single`,size:0},Hd={draught:zd({id:`draught`,name:`Healing Draught`,desc:`Restore 60 HP.`,cost:1,range:Bd,area:Vd,target:`ally`,effects:[{k:`heal`,amount:60}],anim:`throw`}),greaterDraught:zd({id:`greaterDraught`,name:`Greater Draught`,desc:`Restore 130 HP.`,cost:2,range:Bd,area:Vd,target:`ally`,effects:[{k:`heal`,amount:130}],anim:`throw`}),manaTonic:zd({id:`manaTonic`,name:`Mana Tonic`,desc:`Restore 35 MP.`,cost:1,range:Bd,area:Vd,target:`ally`,effects:[{k:`mp`,amount:35}],anim:`throw`}),panacea:zd({id:`panacea`,name:`Panacea`,desc:`Cure every debuff.`,cost:1,range:Bd,area:Vd,target:`ally`,effects:[{k:`cleanse`,kind:`debuff`}],anim:`throw`}),wakeroot:zd({id:`wakeroot`,name:`Wakeroot`,desc:`Revive a fallen ally with 35% HP.`,cost:3,range:Bd,area:Vd,target:`koAlly`,effects:[{k:`revive`,pct:.35}],anim:`throw`}),firebomb:zd({id:`firebomb`,name:`Firebomb`,desc:`Throw it up to 3 tiles: 45 fire damage in radius 1 and 50% Burn. Hits allies too.`,cost:2,range:{kind:`arc`,min:1,max:3},area:{shape:`radius`,size:1,vert:2},target:`tile`,effects:[{k:`damage`,power:0,flat:45,stat:`atk`,element:`fire`,sure:!0,to:`all`},{k:`status`,status:`burn`,turns:2,chance:50,to:`all`}],anim:`throw`,projectile:`bomb`}),quicksilver:zd({id:`quicksilver`,name:`Quicksilver Tonic`,desc:`Haste for 3 turns.`,cost:2,range:Bd,area:Vd,target:`ally`,effects:[{k:`status`,status:`haste`,turns:3,chance:100}],anim:`throw`}),ironbark:zd({id:`ironbark`,name:`Ironbark Tonic`,desc:`Fortify and Ward for 3 turns.`,cost:2,range:Bd,area:Vd,target:`ally`,effects:[{k:`status`,status:`fortify`,turns:3,chance:100},{k:`status`,status:`ward`,turns:3,chance:100}],anim:`throw`}),elixir:zd({id:`elixir`,name:`Elixir`,desc:`Fully restore HP and MP.`,cost:4,range:Bd,area:Vd,target:`ally`,effects:[{k:`heal`,pct:1},{k:`mp`,pct:1}],anim:`throw`})};function Ud(e){let t=Hd[e];if(!t)throw Error(`unknown item ${e}`);return t}var Wd={draught:3,manaTonic:1,panacea:1,wakeroot:1,firebomb:2},Gd={burn:{id:`burn`,name:`Burn`,kind:`debuff`,desc:`Loses 8% max HP at the start of each turn. Water puts it out.`,aiValue:-12,color:`#ff7a30`,glyph:`🔥`},poison:{id:`poison`,name:`Poison`,kind:`debuff`,desc:`Loses 7% max HP at the start of each turn; healing received is halved.`,aiValue:-11,color:`#8bd450`,glyph:`☠`},bleed:{id:`bleed`,name:`Bleed`,kind:`debuff`,desc:`Loses 4% max HP for every tile it moves.`,aiValue:-8,color:`#d83a3a`,glyph:`🩸`},slow:{id:`slow`,name:`Slow`,kind:`debuff`,desc:`Speed -30%: turns come less often.`,aiValue:-10,color:`#6aa8ff`,glyph:`🐌`},haste:{id:`haste`,name:`Haste`,kind:`buff`,desc:`Speed +30%: turns come more often.`,aiValue:12,color:`#ffe066`,glyph:`»`},stun:{id:`stun`,name:`Stun`,kind:`debuff`,desc:`Loses its next turn. Can't evade.`,aiValue:-30,color:`#ffd23f`,glyph:`✦`},frozen:{id:`frozen`,name:`Frozen`,kind:`debuff`,desc:`Loses its next turn. Can't evade. The next physical hit shatters the ice for +50% damage.`,aiValue:-32,color:`#9fe3ff`,glyph:`❄`},root:{id:`root`,name:`Root`,kind:`debuff`,desc:`Can't move (it can still act).`,aiValue:-9,color:`#8a6a3a`,glyph:`⚓`},silence:{id:`silence`,name:`Silence`,kind:`debuff`,desc:`Can't use spells.`,aiValue:-10,color:`#b48cff`,glyph:`∅`},blind:{id:`blind`,name:`Blind`,kind:`debuff`,desc:`Physical attacks are 40% less accurate.`,aiValue:-8,color:`#777777`,glyph:`◐`},regen:{id:`regen`,name:`Regen`,kind:`buff`,desc:`Recovers 8% max HP at the start of each turn.`,aiValue:10,color:`#5fe08a`,glyph:`✚`},barrier:{id:`barrier`,name:`Barrier`,kind:`buff`,desc:`Absorbs damage until depleted.`,aiValue:10,color:`#7fd8ff`,glyph:`◈`},fortify:{id:`fortify`,name:`Fortify`,kind:`buff`,desc:`Takes 30% less physical damage.`,aiValue:9,color:`#c0c8d8`,glyph:`▣`},ward:{id:`ward`,name:`Ward`,kind:`buff`,desc:`Takes 30% less magical damage.`,aiValue:8,color:`#d6a0ff`,glyph:`◇`},might:{id:`might`,name:`Might`,kind:`buff`,desc:`Deals 25% more damage.`,aiValue:10,color:`#ff9a5a`,glyph:`▲`},marked:{id:`marked`,name:`Marked`,kind:`debuff`,desc:`Takes 25% more damage and can't hide.`,aiValue:-9,color:`#ff4d6d`,glyph:`◎`},taunt:{id:`taunt`,name:`Taunted`,kind:`debuff`,desc:`Deals half damage to anyone but the taunter.`,aiValue:-8,color:`#ff6b3d`,glyph:`!`},stealth:{id:`stealth`,name:`Stealth`,kind:`buff`,desc:`Can't be singled out by enemies. Ends when it attacks or is hit.`,aiValue:9,color:`#7a7aa8`,glyph:`◌`},riposte:{id:`riposte`,name:`Riposte`,kind:`stance`,desc:`Counters every melee attack and gains +20 evasion until its next turn.`,aiValue:8,color:`#e8e8e8`,glyph:`⚔`},overwatch:{id:`overwatch`,name:`Overwatch`,kind:`stance`,desc:`Attacks the first enemy that moves into range before its next turn.`,aiValue:8,color:`#ffcc66`,glyph:`◉`},guardian:{id:`guardian`,name:`Guardian`,kind:`stance`,desc:`Takes single-target attacks aimed at adjacent allies.`,aiValue:8,color:`#7aa8ff`,glyph:`⛨`},airborne:{id:`airborne`,name:`Airborne`,kind:`stance`,desc:`High in the sky. Can't be targeted until it lands.`,aiValue:0,color:`#ffffff`,glyph:`☄`},sprint:{id:`sprint`,name:`Sprint`,kind:`buff`,desc:`Extra movement this turn.`,aiValue:3,color:`#ffffff`,glyph:`≫`}},Kd={fire:{id:`fire`,name:`Wildfire`,desc:`Burning ground: anyone entering or starting a turn here catches Burn.`,color:16738848},holy:{id:`holy`,name:`Consecrated`,desc:`Holy ground: the owner's allies regenerate here, enemies are scorched.`,color:16771488},caltrops:{id:`caltrops`,name:`Caltrops`,desc:`Enemies entering take damage and start to Bleed.`,color:10132122},smoke:{id:`smoke`,name:`Smoke`,desc:`Ranged attacks into smoke are 40% less accurate.`,color:11579576},snare:{id:`snare`,name:`Snare Trap`,desc:`Hidden. The first enemy to step here is Rooted and takes damage.`,color:13148240},firetrap:{id:`firetrap`,name:`Fire Trap`,desc:`Hidden. The first enemy to step here sets off an explosion.`,color:16744512},icewall:{id:`icewall`,name:`Ice Pillar`,desc:`A pillar of ice raises this tile. It melts in time.`,color:12577535}},qd=e=>e,Jd={grass:qd({id:`grass`,name:`Grass`,cost:1,standable:!0,cover:0,wet:!1,scorch:0,lethal:!1,desc:`Open ground.`}),dirt:qd({id:`dirt`,name:`Dirt`,cost:1,standable:!0,cover:0,wet:!1,scorch:0,lethal:!1,desc:`Open ground.`}),stone:qd({id:`stone`,name:`Stone`,cost:1,standable:!0,cover:0,wet:!1,scorch:0,lethal:!1,desc:`Solid footing.`}),sand:qd({id:`sand`,name:`Sand`,cost:1,standable:!0,cover:0,wet:!1,scorch:0,lethal:!1,desc:`Packed arena sand.`}),snow:qd({id:`snow`,name:`Snow`,cost:1,standable:!0,cover:0,wet:!1,scorch:0,lethal:!1,desc:`Packed snow.`}),moss:qd({id:`moss`,name:`Moss`,cost:1,standable:!0,cover:0,wet:!1,scorch:0,lethal:!1,desc:`Old mossy stone.`}),wood:qd({id:`wood`,name:`Bridge`,cost:1,standable:!0,cover:0,wet:!1,scorch:0,lethal:!1,desc:`Planks over water.`}),obsidian:qd({id:`obsidian`,name:`Obsidian`,cost:1,standable:!0,cover:0,wet:!1,scorch:0,lethal:!1,desc:`Cooled volcanic glass.`}),ice:qd({id:`ice`,name:`Ice`,cost:1,standable:!0,cover:0,wet:!0,scorch:0,lethal:!1,desc:`Slick ice. Counts as wet.`}),water:qd({id:`water`,name:`Shallows`,cost:2,standable:!0,cover:0,wet:!0,scorch:0,lethal:!1,desc:`Costs 2 to wade. Wet: storm damage +50%, puts out Burn.`}),deep:qd({id:`deep`,name:`Deep Water`,cost:1/0,standable:!1,cover:0,wet:!0,scorch:0,lethal:!0,desc:`Too deep to wade. Anyone knocked in is swept away.`}),lava:qd({id:`lava`,name:`Lava`,cost:3,standable:!0,cover:0,wet:!1,scorch:.2,lethal:!1,desc:`Searing: 20% max HP and Burn on entering or starting a turn here.`}),thicket:qd({id:`thicket`,name:`Thicket`,cost:2,standable:!0,cover:25,wet:!1,scorch:0,lethal:!1,desc:`Costs 2. +25 evasion vs ranged attacks.`}),void:qd({id:`void`,name:`Chasm`,cost:1/0,standable:!1,cover:0,wet:!1,scorch:0,lethal:!0,desc:`A bottomless drop. Anyone knocked in is lost.`})},Yd=new Set([`tree`,`pine`,`snowpine`,`boulder`,`pillar`,`brokenPillar`,`brazier`,`banner`,`crystal`,`ruinWall`,`obsidianSpike`,`deadTree`,`barrel`]),Xd={tree:4,pine:4,snowpine:4,deadTree:3,boulder:2,pillar:4,brokenPillar:2,brazier:2,banner:3,crystal:2,ruinWall:2,obsidianSpike:2,barrel:1},Zd=[{dx:0,dy:1},{dx:1,dy:0},{dx:0,dy:-1},{dx:-1,dy:0}],Qd=[`physical`,`fire`,`frost`,`storm`,`radiant`,`shadow`,`arcane`],$d=class{width;height;tiles;constructor(e){this.width=e.width,this.height=e.height,this.tiles=[];for(let t=0;t<e.height;t++)for(let n=0;n<e.width;n++){let r=e.heights[t][n];this.tiles.push({x:n,y:t,h:r,baseH:r,terrain:e.terrain[t][n],prop:e.props[t][n],effects:[]})}}inBounds(e,t){return e>=0&&t>=0&&e<this.width&&t<this.height}get(e,t){return this.inBounds(e,t)?this.tiles[t*this.width+e]:void 0}at(e,t){return this.tiles[t*this.width+e]}key(e,t){return t*this.width+e}neighbors(e,t){let n=[];for(let r of Zd){let i=this.get(e+r.dx,t+r.dy);i&&n.push(i)}return n}walkable(e){return Number.isFinite(Jd[e.terrain].cost)&&!(e.prop&&Yd.has(e.prop))}standable(e){return Jd[e.terrain].standable&&!(e.prop&&Yd.has(e.prop))}sightHeight(e){return e.h+(e.prop&&Yd.has(e.prop)?Xd[e.prop]??2:0)}hasEffect(e,t){for(let n of e.effects)if(n.id===t)return!0;return!1}recomputeHeight(e){let t=e.baseH;for(let n of e.effects)n.id===`icewall`&&(t+=n.amount??0);e.h=t}lineTiles(e,t){let n=[],r=t.x-e.x,i=t.y-e.y,a=Math.max(Math.abs(r),Math.abs(i))*4;if(a===0)return n;let o=this.key(e.x,e.y),s=this.key(t.x,t.y);for(let t=1;t<a;t++){let c=t/a,l=e.x+r*c,u=e.y+i*c;for(let[t,r]of[[0,0],[.01,.01],[-.01,-.01]]){let i=Math.round(l+t),a=Math.round(u+r),c=this.key(i,a);if(c===o||c===s||i===e.x&&a===e.y)continue;let d=this.get(i,a);d&&!n.includes(d)&&n.push(d),o=c}}return n}};function ef(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}function tf(e,t){let n=t.x-e.x,r=t.y-e.y;return Math.abs(n)>Math.abs(r)?n>0?1:3:r===0?n>0?1:n<0?3:0:r>0?0:2}var nf=[`hp`,`mp`,`atk`,`mag`,`def`,`res`,`spd`,`move`,`jump`,`eva`,`crit`];function rf(e,t){if(t)for(let n of nf)e[n]+=t[n]??0}function af(e,t){let n=Td[e],r={...Cd[n.classId].base};rf(r,n.mods);let i=Object.fromEntries(Qd.map(e=>[e,0])),a=e=>{if(e)for(let t of Qd)i[t]+=e[t]??0};a(n.resist);let o=[n.passive],s=Id(t.weapon);rf(r,s.mods),o.push(...s.passives??[]);let c=Ld(t.armor);rf(r,c.mods),a(c.resist),o.push(...c.passives??[]);for(let e of[t.acc1,t.acc2]){if(!e)continue;let t=Rd(e);rf(r,t.mods),a(t.resist),o.push(...t.passives??[])}return r.move=Math.max(1,r.move),r.jump=Math.max(1,r.jump),r.spd=Math.max(4,r.spd),r.eva=Math.max(0,r.eva),{stats:r,resist:i,passives:o}}function of(e,t,n,r,i){let a=Td[n.subclassId],o=Cd[a.classId],{stats:s,resist:c,passives:l}=af(n.subclassId,n.gear);return{id:e,name:n.name,team:t,classId:a.classId,subclassId:a.id,gear:{...n.gear},stats:s,resist:c,hp:s.hp,mp:s.mp,ct:0,surge:0,x:0,y:0,facing:0,statuses:[],ko:!1,koTimer:0,gone:!1,cooldowns:{},abilities:[...a.abilities,...o.abilities],surgeAbility:a.surge,passives:l,role:a.role,ai:i,summonerId:null,flags:{},seed:r}}function sf(e){let t=Cd[Td[e].classId];return Object.values(Nd).filter(e=>t.weapons.includes(e.kind)).map(e=>e.id)}function cf(e){let t=Td[e],n=[...Cd[t.classId].armors,...t.extraArmors??[]];return Object.values(Pd).filter(e=>n.includes(e.kind)&&e.id!==`wolfHide`).map(e=>e.id)}function lf(){return Object.keys(Fd)}function uf(e,t){let n=Td[e].defaultGear,r=sf(e),i=cf(e);return{weapon:r.includes(t.weapon)?t.weapon:n.weapon,armor:i.includes(t.armor)?t.armor:n.armor,acc1:t.acc1,acc2:t.acc2===t.acc1?null:t.acc2}}function G(e,t){for(let n of e.statuses)if(n.id===t)return!0;return!1}function df(e,t){for(let n of e.statuses)if(n.id===t)return n}function K(e,t){return e.passives.includes(t)}function ff(e){let t=0;for(let n of e.statuses)Gd[n.id].kind===`debuff`&&t++;return t}function q(e){return!e.ko&&!e.gone}function pf(e){return!e.gone&&!G(e,`airborne`)}function mf(e){let t=e.stats.spd;return G(e,`haste`)&&(t*=1.3),G(e,`slow`)&&(t*=.7),t}function hf(e){if(G(e,`root`))return 0;let t=e.stats.move,n=df(e,`sprint`);return n&&(t+=n.value??0),K(e,`opportunist`)&&G(e,`stealth`)&&(t+=1),t}function gf(e){if(G(e,`stun`)||G(e,`frozen`))return 0;let t=e.stats.eva;return G(e,`riposte`)&&(t+=20),Math.max(0,t)}function _f(e,t){return!!(K(e,`purity`)&&(t===`poison`||t===`burn`||t===`bleed`)||K(e,`steadfast`)&&(t===`stun`||t===`frozen`||t===`taunt`)||K(e,`armorOfFaith`)&&t===`silence`)}function vf(e,t){return K(e,`manaThrift`)?Math.floor(t*.75):t}function yf(e,t,n){let r=n.h-t.h;return!(r>e.stats.jump||-r>e.stats.jump+2)}function bf(e,t){let n=Jd[t.terrain].cost;return n>1&&K(e,`pathfinder`)?1:n}function xf(e,t,n={}){let r=e.map,i=n.move??hf(t),a=new Map,o=r.key(t.x,t.y);a.set(o,{x:t.x,y:t.y,cost:0,prev:-1,canStop:!0});let s=new Set,c=new Set;if(!n.ignoreUnits){for(let n of e.units)if(n.team!==t.team&&pf(n)&&!n.ko&&K(n,`holdTheLine`))for(let e of r.neighbors(n.x,n.y))c.add(r.key(e.x,e.y))}for(;;){let l=-1,u=null;for(let[e,t]of a)s.has(e)||(!u||t.cost<u.cost)&&(u=t,l=e);if(!u)break;if(s.add(l),l!==o&&c.has(l))continue;let d=r.at(u.x,u.y);for(let o of r.neighbors(u.x,u.y)){let c=r.key(o.x,o.y);if(s.has(c)||!r.walkable(o)||!yf(t,d,o))continue;let f=r.standable(o);if(!n.ignoreUnits){let n=e.unitAt(o.x,o.y);if(n&&n!==t){if(n.team!==t.team&&!n.ko)continue;f=!1}if(e.visibleTrapAt(o,t.team))continue}let p=u.cost+bf(t,o);if(p>i)continue;let m=a.get(c);(!m||p<m.cost)&&a.set(c,{x:o.x,y:o.y,cost:p,prev:l,canStop:f})}}return a}function Sf(e,t,n,r){let i=[],a=e.map.key(n,r),o=t.get(a);for(;o&&(i.push({x:o.x,y:o.y}),!(o.prev<0));)a=o.prev,o=t.get(a);return i.reverse()}function Cf(e,t){let n=[];for(let r of xf(e,t).values())r.canStop&&n.push(r);return n}function wf(e,t,n){let r=e.map,i=new Int32Array(r.width*r.height).fill(9999),a=[];for(let e of n){let t=r.key(e.x,e.y);i[t]=0,a.push(t)}for(let e=0;e<a.length;e++){let n=a[e],o=n%r.width,s=Math.floor(n/r.width),c=r.at(o,s);for(let e of r.neighbors(o,s)){let o=r.key(e.x,e.y);if(!r.walkable(e)||!yf(t,e,c))continue;let s=i[n]+(i[n]===0?1:bf(t,c));i[o]<=s||(i[o]=s,a.push(o))}}return i}var Tf=class{s;constructor(e){this.s=e>>>0}next(){this.s=this.s+1831565813>>>0;let e=this.s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return e+Math.floor(this.next()*(t-e+1))}chance(e){return this.next()*100<e}pick(e){return e[Math.floor(this.next()*e.length)]}get state(){return this.s}set state(e){this.s=e>>>0}};function Ef(e){let t=Id(e.gear.weapon);return t.range??kd[t.kind].range}function Df(e,t){return t.kind===`weapon`?Ef(e):t}function Of(e,t,n){let r=t-n;return K(e,`eaglesPerch`)?Math.max(-2,Math.min(5,r)):Math.max(-2,Math.min(3,Math.floor(r/2)))}function kf(e,t,n){let r=Math.max(t.h,n.h)+3;for(let i of e.map.lineTiles(t,n))if(e.map.sightHeight(i)>r)return!1;return!0}function Af(e,t,n){let r={x:t.x,y:t.y,h:t.h+2},i={x:n.x,y:n.y,h:n.h+1},a=Math.hypot(i.x-r.x,i.y-r.y);for(let o of e.map.lineTiles(t,n)){let t=((o.x-r.x)*(i.x-r.x)+(o.y-r.y)*(i.y-r.y))/(a*a),n=r.h+(i.h-r.h)*Math.max(0,Math.min(1,t));if(e.map.sightHeight(o)>n)return!1}return!0}function jf(e,t,n,r,i){let a=Df(t,n),o=e.map.at(r.x,r.y),s=ef(r,i),c=a.vert??3;switch(a.kind){case`self`:return s===0;case`melee`:return s>=a.min&&s<=a.max&&Math.abs(i.h-o.h)<=c;case`reach`:{if(i.x!==r.x&&i.y!==r.y||s<a.min||s>a.max||Math.abs(i.h-o.h)>c)return!1;let t=Zd[tf(r,i)];for(let n=1;n<s;n++){let i=e.map.get(r.x+t.dx*n,r.y+t.dy*n);if(i&&e.map.sightHeight(i)>o.h+c)return!1}return!0}case`arc`:{let n=a.max+Of(t,o.h,i.h)+ +!!K(t,`farsight`);return s>=a.min&&s<=n&&kf(e,o,i)}case`direct`:{let n=a.max+ +!!K(t,`farsight`);return s>=a.min&&s<=n&&Math.abs(i.h-o.h)<=c+6&&Af(e,o,i)}case`magic`:return s>=a.min&&s<=a.max&&(a.vert===void 0||Math.abs(i.h-o.h)<=a.vert);case`weapon`:return!1}}function Mf(e,t,n,r){let i=Df(t,n),a=i.kind===`arc`?i.max+6:i.max+1,o=[];for(let n=r.y-a;n<=r.y+a;n++)for(let s=r.x-a;s<=r.x+a;s++){let a=e.map.get(s,n);a&&jf(e,t,i,r,a)&&o.push(a)}return o}function Nf(e,t,n,r,i){let a=e.map,o=a.get(i.x,i.y);if(!o)return[];let s=n.vert??3;switch(n.shape){case`single`:return[o];case`radius`:{let e=[];for(let t=i.y-n.size;t<=i.y+n.size;t++)for(let c=i.x-n.size;c<=i.x+n.size;c++){let l=a.get(c,t);!l||ef(l,i)>n.size||Math.abs(l.h-o.h)>s||n.excludeSelf&&l.x===r.x&&l.y===r.y||e.push(l)}return e}case`line`:{let e=a.at(r.x,r.y),t=Zd[tf(r,i)],o=[];for(let i=1;i<=n.size;i++){let n=a.get(r.x+t.dx*i,r.y+t.dy*i);if(!n)break;Math.abs(n.h-e.h)<=s&&o.push(n)}return o}case`sweep`:{let e=Zd[(tf(r,i)+1)%4],t=[o];for(let n of[1,-1]){let r=a.get(i.x+e.dx*n,i.y+e.dy*n);r&&t.push(r)}return t}case`allies`:case`enemies`:{let r=[];for(let i of e.units)pf(i)&&n.shape===`allies`==(i.team===t.team)&&r.push(a.at(i.x,i.y));return r}}}function Pf(e,t){switch(e.k){case`damage`:case`knockback`:case`pull`:case`steal`:case`faceAway`:case`chain`:return`enemy`;case`heal`:case`mp`:case`surge`:return t===`self`?`self`:`ally`;case`status`:return Gd[e.status].kind===`debuff`?`enemy`:t===`self`?`self`:`ally`;case`cleanse`:return e.kind===`debuff`?`ally`:`enemy`;case`revive`:return`koAlly`;default:return`all`}}function Ff(e,t){return`to`in e&&e.to||Pf(e,t)}function If(e,t,n){switch(n){case`enemy`:return q(t)&&t.team!==e.team;case`ally`:return q(t)&&t.team===e.team;case`all`:return q(t);case`self`:return t===e;case`koAlly`:return t.ko&&!t.gone&&t.team===e.team}}function Lf(e,t){let n=[];for(let r of t){let t=e.unitAt(r.x,r.y);t&&n.push(t)}return n}function Rf(e,t){return!(G(t,`airborne`)||t.team!==e.team&&G(t,`stealth`)&&!G(t,`marked`))}function zf(e,t,n,r,i){if(!jf(e,t,n.range,r,i))return!1;let a=e.unitAt(i.x,i.y);switch(n.target){case`self`:return i.x===r.x&&i.y===r.y;case`enemy`:return!!a&&q(a)&&a.team!==t.team&&Rf(t,a);case`ally`:return!!a&&q(a)&&a.team===t.team;case`unit`:return!!a&&q(a)&&Rf(t,a);case`koAlly`:return!!a&&a.ko&&!a.gone&&a.team===t.team;case`empty`:return a||i.x===r.x&&i.y===r.y?!1:e.map.standable(i)&&e.map.walkable(i)&&!e.trapAt(i);case`tile`:return!0}}function Bf(e,t,n,r=t){return Mf(e,t,n.range,r).filter(i=>zf(e,t,n,r,i))}var Vf=100,Hf=3,Uf=600,Wf=class{arena;map;rng;setup;units=[];tick=0;turnCount=0;casts=[];pouches;turn=null;winner=null;log=[];events=[];nextUnitId=1;nextCastId=1;started=!1;constructor(e){this.setup=e,this.arena=xd(e.arenaId),this.map=new $d(this.arena),this.rng=new Tf(e.seed),this.pouches=[{...e.teams[0].pouch},{...e.teams[1].pouch}];for(let t of[0,1]){let n=e.teams[t],r=this.arena.deploy[t];n.units.forEach((i,a)=>{let o=r[a%r.length],s=of(this.nextUnitId++,t,i,e.seed*31+a*7+t*101>>>0,n.ai);s.x=o.x,s.y=o.y,s.facing=t===0?2:0,this.units.push(s)})}}unit(e){let t=this.units.find(t=>t.id===e);if(!t)throw Error(`no unit ${e}`);return t}unitAt(e,t){for(let n of this.units)if(n.x===e&&n.y===t&&pf(n))return n}active(){return this.turn?this.unit(this.turn.unitId):null}trapAt(e){return e.effects.find(e=>e.id===`snare`||e.id===`firetrap`)}visibleTrapAt(e,t){let n=this.trapAt(e);return!!n&&n.team!==t&&!n.hidden}wolfOf(e){return this.units.find(t=>t.summonerId===e.id&&q(t))}partnerOf(e){if(e.summonerId!==null){let t=this.unit(e.summonerId);return q(t)?t:void 0}return this.wolfOf(e)}teamAlive(e){return this.units.filter(t=>t.team===e&&q(t))}dangerTiles(e){let t=new Set;for(let n of this.casts){if(n.team===e)continue;let r=this.unit(n.casterId),i=hd(n.ability),a=this.castTarget(n);for(let e of Nf(this,r,i.area,r,a))t.add(this.map.key(e.x,e.y))}return t}castTarget(e){if(e.followUnit!==null){let t=this.unit(e.followUnit);if(pf(t)&&q(t))return{x:t.x,y:t.y}}return e.target}canUse(e,t){let n=hd(t),r=this.turn;if(!r||r.unitId!==e.id)return{ok:!1,reason:`Not this unit's turn`};if(n.usesMove){if(r.moved)return{ok:!1,reason:`Already moved`};if(G(e,`root`))return{ok:!1,reason:`Rooted`}}else if(r.acted)return{ok:!1,reason:`Already acted`};if(n.surge&&e.surge<100)return{ok:!1,reason:`Surge ${Math.floor(e.surge)}%`};if(vf(e,n.mp)>e.mp)return{ok:!1,reason:`Not enough MP`};let i=e.cooldowns[t]??0;return i>0?{ok:!1,reason:`Ready in ${i} turn${i>1?`s`:``}`}:n.school===`spell`&&G(e,`silence`)?{ok:!1,reason:`Silenced`}:(n.planted||n.move===`sprint`)&&r.moved?{ok:!1,reason:`Only before moving`}:n.effects.some(e=>e.k===`summon`)&&this.wolfOf(e)?{ok:!1,reason:`Wolf is already out`}:n.effects.some(e=>e.k===`special`&&e.id===`sicEm`)&&!this.wolfOf(e)?{ok:!1,reason:`No wolf`}:this.targetsFor(e,n).length===0?{ok:!1,reason:`No targets in range`}:{ok:!0}}targetsFor(e,t,n=e){return Bf(this,e,t,n).filter(r=>this.specialValid(e,t,r,n))}specialValid(e,t,n,r){let i=this.unitAt(n.x,n.y);switch(t.move){case`grapple`:return i?q(i)&&i.team!==e.team&&Rf(e,i)&&ef(i,r)>1:this.map.standable(n)&&this.map.walkable(n)&&!this.trapAt(n);case`shadowstep`:return!!i&&this.landingNear(i,e,!0)!==null;case`dash`:return!!i&&(ef(i,r)===1||this.landingNear(i,e,!1,r)!==null)}for(let n of t.effects)if(n.k===`special`&&n.id===`sicEm`){let t=this.wolfOf(e);if(!t||!i||ef(t,i)>6||ef(t,i)!==1&&this.landingNear(i,t,!1)===null)return!1}return!0}landingNear(e,t,n,r=t){let i=[],a=Zd[(e.facing+2)%4];for(let o of Zd){let s=this.map.get(e.x+o.dx,e.y+o.dy);if(!s||!this.map.standable(s)||!this.map.walkable(s))continue;let c=this.unitAt(s.x,s.y);if(c&&c!==t||this.visibleTrapAt(s,t.team))continue;let l=ef(s,r);n&&(l=o===a?-10:o.dx===-a.dx&&o.dy===-a.dy?10:0),i.push({p:{x:s.x,y:s.y},score:l})}return i.sort((e,t)=>e.score-t.score),i.length?i[0].p:null}start(){if(this.started)return[];this.started=!0;for(let e of[...this.units])e.ct=this.rng.int(0,40),K(e,`startStealth`)&&this.applyStatus(e,`stealth`,2),K(e,`startHaste`)&&this.applyStatus(e,`haste`,2),K(e,`startRegen`)&&this.applyStatus(e,`regen`,3);return this.pushLog(`Battle at ${this.arena.name}.`),this.runTimeline(),this.flush()}readyUnit(){let e=null;for(let t of this.units)t.gone||G(t,`airborne`)||t.ct<Vf||(!e||t.ct>e.ct||t.ct===e.ct&&t.id<e.id)&&(e=t);return e}runTimeline(){let e=0;for(;this.winner===null;){if(++e>2e5)throw Error(`timeline stuck`);let t=this.readyUnit();if(t){if(this.startTurn(t))return}else this.tickOnce()}}tickOnce(){this.tick++;let e=this.casts.filter(e=>e.resolveAt<=this.tick).sort((e,t)=>e.resolveAt-t.resolveAt||e.id-t.id);for(let t of e){if(this.winner!==null)return;this.casts=this.casts.filter(e=>e!==t),this.resolveCast(t)}for(let e of this.map.tiles){if(!e.effects.length)continue;let t=e.effects.filter(e=>e.until>this.tick);if(t.length===e.effects.length)continue;for(let t of e.effects)t.until<=this.tick&&this.emit({t:`tile`,x:e.x,y:e.y,effect:t.id,on:!1,team:t.team,hidden:!!t.hidden});let n=e.effects.some(e=>e.id===`icewall`);e.effects=t,n&&(this.map.recomputeHeight(e),this.emit({t:`terrain`,x:e.x,y:e.y,h:e.h}))}for(let e of this.units)e.gone||G(e,`airborne`)||(e.ct+=e.ko?e.stats.spd:mf(e))}startTurn(e){if(this.turnCount++,this.turnCount>Uf)return this.declareTimeout(),!1;if(e.ko){if(K(e,`autoRevive`)&&!e.flags.autoRevive)e.flags.autoRevive=!0,this.text(e,`Rebirth!`,`good`),this.revive(e,.3);else return e.koTimer--,e.koTimer<=0?(e.gone=!0,this.emit({t:`gone`,unit:e.id}),this.pushLog(`${e.name} is lost.`)):this.text(e,`${e.koTimer}`,`bad`),e.ct-=Vf,!1}for(let t of[...e.statuses])Gd[t.id].kind===`stance`&&t.id!==`airborne`&&this.removeStatus(e,t.id);this.emit({t:`turn`,unit:e.id});let t=this.map.at(e.x,e.y),n=e.stats.hp;if(G(e,`burn`)&&(Jd[t.terrain].wet?this.removeStatus(e,`burn`):this.dealDamage(null,e,Math.max(1,Math.round(n*.08)),`fire`,!1,!1,{dot:!0})),q(e)&&G(e,`poison`)&&this.dealDamage(null,e,Math.max(1,Math.round(n*.07)),`shadow`,!1,!1,{dot:!0}),q(e)&&G(e,`regen`)&&this.healUnit(null,e,Math.round(n*.08)),q(e)){for(let r of t.effects)r.id===`holy`?r.team===e.team?this.healUnit(null,e,Math.round(n*.08)):this.dealDamage(null,e,Math.round(n*.08),`radiant`,!1,!1,{dot:!0}):r.id===`fire`&&this.applyStatus(e,`burn`,2);q(e)&&Jd[t.terrain].scorch>0&&(this.dealDamage(null,e,Math.round(n*Jd[t.terrain].scorch),`fire`,!1,!1,{dot:!0}),q(e)&&this.applyStatus(e,`burn`,2))}if(this.winner!==null)return!1;if(!q(e))return e.ct-=Vf,!1;if(G(e,`stun`)||G(e,`frozen`)){let t=G(e,`frozen`)?`Frozen`:`Stunned`;return this.removeStatus(e,`stun`),this.removeStatus(e,`frozen`),this.emit({t:`skip`,unit:e.id,reason:t}),e.ct-=Vf,this.upkeep(e),!1}return this.turn={unitId:e.id,moved:!1,acted:!1,startX:e.x,startY:e.y,startFacing:e.facing,canUndo:!0},!0}declareTimeout(){let e=e=>this.units.filter(t=>t.team===e&&q(t)).reduce((e,t)=>e+t.hp/t.stats.hp,0);this.setWinner(e(0)>=e(1)?0:1)}upkeep(e){for(let t of[...e.statuses])t.id!==`airborne`&&(t.id===`sprint`?this.removeStatus(e,t.id):(t.turns--,t.turns<=0&&this.removeStatus(e,t.id)));for(let t of Object.keys(e.cooldowns))e.cooldowns[t]--,e.cooldowns[t]<=0&&delete e.cooldowns[t]}endTurn(e){let t=this.active();if(!t||!this.turn)return[];e!==void 0&&q(t)&&(t.facing=e,this.emit({t:`face`,unit:t.id,dir:e}));let n=this.turn;return t.ct-=n.moved&&n.acted?Vf:n.moved||n.acted?80:60,q(t)&&this.upkeep(t),this.turn=null,this.runTimeline(),this.flush()}move(e,t){let n=this.active(),r=this.turn;if(!n||!r||r.moved)return[];let i=xf(this,n),a=i.get(this.map.key(e,t));if(!a||!a.canStop||e===n.x&&t===n.y)return[];let o=Sf(this,i,e,t);return r.moved=!0,(!this.walk(n,o)||r.acted)&&(r.canUndo=!1),this.flush()}undoMove(){let e=this.active(),t=this.turn;if(!e||!t||!t.moved||t.acted||!t.canUndo)return[];let n={x:e.x,y:e.y};return e.x=t.startX,e.y=t.startY,e.facing=t.startFacing,t.moved=!1,this.emit({t:`leap`,unit:e.id,from:n,to:{x:e.x,y:e.y},kind:`dash`}),this.emit({t:`face`,unit:e.id,dir:e.facing}),this.flush()}walk(e,t){let n=!0,r=[t[0]],i=0;for(let a=1;a<t.length;a++){let o=t[a];e.facing=tf(t[a-1],o),e.x=o.x,e.y=o.y,r.push(o),i++;let s=this.enterTile(e,this.map.at(o.x,o.y),!0,r);if(s.happened&&(n=!1,r=[o]),s.stop)break}return r.length>1&&this.emit({t:`move`,unit:e.id,path:r}),i>0&&q(e)&&G(e,`bleed`)&&(n=!1,this.dealDamage(null,e,Math.max(1,Math.round(e.stats.hp*.04*i)),`physical`,!1,!1,{dot:!0})),n}enterTile(e,t,n,r){let i=!1,a=()=>{!i&&r&&r.length>1&&this.emit({t:`move`,unit:e.id,path:[...r]}),i=!0},o=Jd[t.terrain];o.wet&&G(e,`burn`)&&(a(),this.removeStatus(e,`burn`));for(let n of this.map.neighbors(t.x,t.y)){let t=this.unitAt(n.x,n.y);t&&t.team!==e.team&&q(t)&&G(t,`stealth`)&&(a(),this.removeStatus(t,`stealth`),this.text(t,`Spotted!`,`info`))}let s=this.trapAt(t),c=!1;if(s&&s.team!==e.team){a(),t.effects=t.effects.filter(e=>e!==s),this.emit({t:`tile`,x:t.x,y:t.y,effect:s.id,on:!1,team:s.team,hidden:!1});let n=this.units.find(e=>e.id===s.source);if(s.id===`snare`)this.text(e,`Snared!`,`bad`),this.dealDamage(n??null,e,30,`physical`,!1,!1,{}),q(e)&&this.applyStatus(e,`root`,2);else{this.text(e,`Fire trap!`,`bad`);let r=Nf(this,e,{shape:`radius`,size:1,vert:3},t,t);this.emit({t:`aoe`,center:{x:t.x,y:t.y},tiles:r.map(e=>({x:e.x,y:e.y})),element:`fire`,ability:`fireTrap`});let i=n?n.stats.atk*1.6*.9:50;for(let e of Lf(this,r)){if(!q(e)||e.team===s.team)continue;let t=Math.round(i*(50/(50+e.stats.res))*this.resistMult(e,`fire`));this.dealDamage(n??null,e,Math.max(1,t),`fire`,!1,!1,{}),q(e)&&this.rng.chance(70)&&this.applyStatus(e,`burn`,2)}}c=!0}for(let n of t.effects){if(!q(e))break;n.id===`caltrops`&&n.team!==e.team?(a(),this.dealDamage(null,e,10,`physical`,!1,!1,{dot:!0}),q(e)&&this.applyStatus(e,`bleed`,2)):n.id===`fire`&&(a(),this.applyStatus(e,`burn`,2))}if(q(e)&&o.scorch>0&&(a(),this.dealDamage(null,e,Math.round(e.stats.hp*o.scorch),`fire`,!1,!1,{dot:!0}),q(e)&&this.applyStatus(e,`burn`,2)),n&&q(e))for(let n of this.units){if(!q(e))break;if(n.team===e.team||!q(n)||!pf(n))continue;let r=df(n,`overwatch`);!r||(r.value??0)<=0||G(n,`stun`)||G(n,`frozen`)||Rf(n,e)&&jf(this,n,Ef(n),n,t)&&(a(),r.value=(r.value??1)-1,(r.value??0)<=0&&this.removeStatus(n,`overwatch`),this.text(n,`Overwatch!`,`info`),this.reactionAttack(n,e))}return(!q(e)||G(e,`root`)||G(e,`stun`)||G(e,`frozen`))&&(c=!0),{happened:i,stop:c}}act(e,t,n){let r=this.active(),i=this.turn;if(!r||!i)return[];let a=hd(e);if(!this.canUse(r,e).ok)return[];let o=this.map.get(t,n);if(!o||!zf(this,r,a,r,o)||!this.specialValid(r,a,o,r))return[];r.mp-=vf(r,a.mp),a.cooldown&&(r.cooldowns[e]=a.cooldown+1);let s=!i.moved;return i.canUndo=!1,a.usesMove?i.moved=!0:i.acted=!0,a.planted&&(i.moved=!0),s&&K(r,`windstep`)&&!a.planted&&!a.usesMove&&this.applyStatus(r,`sprint`,1,2),(t!==r.x||n!==r.y)&&(r.facing=tf(r,o),this.emit({t:`face`,unit:r.id,dir:r.facing})),a.surge&&(r.surge=0,this.emit({t:`surge`,unit:r.id,value:0}),this.text(r,a.name,`surge`)),this.pushLog(`${r.name}: ${a.name}.`),a.castTime?this.startCast(r,a,{x:t,y:n}):this.resolveUse(r,a,{x:t,y:n},{abilityId:e,isBasic:e===`attack`,reaction:!1,potency:1,item:null}),this.checkWinner(),this.flush()}itemUse(e,t){let n=Ud(t);if(!K(e,`quartermaster`))return n;let r=n.range.kind===`arc`?{...n.range,max:4}:{kind:`magic`,min:0,max:4};return{...n,range:r}}canUseItem(e,t){let n=this.turn;return!n||n.unitId!==e.id?{ok:!1,reason:`Not this unit's turn`}:n.acted?{ok:!1,reason:`Already acted`}:(this.pouches[e.team][t]??0)<=0?{ok:!1,reason:`None left`}:this.targetsFor(e,this.itemUse(e,t)).length===0?{ok:!1,reason:`No targets in range`}:{ok:!0}}useItem(e,t,n){let r=this.active(),i=this.turn;if(!r||!i||!this.canUseItem(r,e).ok)return[];let a=this.itemUse(r,e),o=this.map.get(t,n);if(!o||!zf(this,r,a,r,o))return[];this.pouches[r.team][e]--,this.emit({t:`item`,team:r.team,item:e,count:this.pouches[r.team][e]}),!i.moved&&K(r,`windstep`)&&this.applyStatus(r,`sprint`,1,2),i.acted=!0,i.canUndo=!1,(t!==r.x||n!==r.y)&&(r.facing=tf(r,o),this.emit({t:`face`,unit:r.id,dir:r.facing})),this.pushLog(`${r.name} uses ${a.name}.`);let s=K(r,`quartermaster`)?1.5:1;return this.resolveUse(r,a,{x:t,y:n},{abilityId:`item:${e}`,isBasic:!1,reaction:!1,potency:s,item:a}),this.checkWinner(),this.flush()}startCast(e,t,n){let r=this.unitAt(n.x,n.y),i={id:this.nextCastId++,casterId:e.id,ability:t.id,target:n,followUnit:t.follow&&r?r.id:null,resolveAt:this.tick+(t.castTime??0),team:e.team};this.casts.push(i),t.move===`comet`&&(this.applyStatus(e,`airborne`,99),this.emit({t:`leap`,unit:e.id,from:{x:e.x,y:e.y},to:{x:e.x,y:e.y},kind:`leap`}));let a=Nf(this,e,t.area,e,n).map(e=>({x:e.x,y:e.y}));this.emit({t:`act`,unit:e.id,ability:t.id,target:n,anim:`cast`}),this.emit({t:`cast`,id:i.id,unit:e.id,ability:t.id,target:n,tiles:a})}resolveCast(e){let t=this.unit(e.casterId),n=hd(e.ability);if(!q(t)){this.emit({t:`castEnd`,id:e.id,interrupted:!0}),G(t,`airborne`)&&this.removeStatus(t,`airborne`);return}let r=this.castTarget(e);if(this.emit({t:`castEnd`,id:e.id,interrupted:!1}),n.move===`comet`){let e=this.landingFor(t,r),n={x:t.x,y:t.y};t.x=e.x,t.y=e.y,this.removeStatus(t,`airborne`),this.emit({t:`leap`,unit:t.id,from:n,to:e,kind:`land`})}this.pushLog(`${t.name}'s ${n.name} goes off.`),this.resolveUse(t,n,r,{abilityId:n.id,isBasic:!1,reaction:!1,potency:1,item:null}),this.checkWinner()}landingFor(e,t){let n=null,r=1/0;for(let i of this.map.tiles){if(!this.map.standable(i)||!this.map.walkable(i))continue;let a=this.unitAt(i.x,i.y);if(a&&a!==e)continue;let o=ef(i,t)+0;o<r&&(r=o,n={x:i.x,y:i.y})}return n??{x:e.x,y:e.y}}resolveUse(e,t,n,r){let i=`school`in t?t:null,a=this.map.at(n.x,n.y);switch(i?.move){case`leap`:case`vault`:{let t={x:e.x,y:e.y};if(e.x=n.x,e.y=n.y,this.emit({t:`leap`,unit:e.id,from:t,to:n,kind:i.move}),this.enterTile(e,a,!1,null),i.move===`vault`||!q(e))return;break}case`shadowstep`:{let t=this.unitAt(n.x,n.y);if(!t)return;let r=this.landingNear(t,e,!0);if(!r)return;let i={x:e.x,y:e.y};e.x=r.x,e.y=r.y,e.facing=tf(r,t),this.emit({t:`leap`,unit:e.id,from:i,to:r,kind:`shadowstep`}),this.emit({t:`face`,unit:e.id,dir:e.facing}),this.enterTile(e,this.map.at(r.x,r.y),!1,null);return}case`dash`:{let t=this.unitAt(n.x,n.y);if(t&&ef(t,e)>1){let n=this.landingNear(t,e,!1);if(n){let r={x:e.x,y:e.y};e.x=n.x,e.y=n.y,e.facing=tf(n,t),this.emit({t:`leap`,unit:e.id,from:r,to:n,kind:`dash`})}}break}case`grapple`:{let t=this.unitAt(n.x,n.y);if(this.emit({t:`act`,unit:e.id,ability:i.id,target:n,anim:`shoot`}),this.emit({t:`projectile`,from:{x:e.x,y:e.y},fromUnit:e.id,to:n,kind:`hook`,arc:!1}),t)this.pull(t,e);else{let t={x:e.x,y:e.y};e.x=n.x,e.y=n.y,this.emit({t:`leap`,unit:e.id,from:t,to:n,kind:`grapple`}),this.enterTile(e,a,!1,null)}return}case`sprint`:this.applyStatus(e,`sprint`,1,3),this.emit({t:`act`,unit:e.id,ability:i.id,target:n,anim:`self`});return}let o=r.isBasic,s=Id(e.gear.weapon),c=kd[s.kind],l=o&&K(e,`cleaving`)?{shape:`sweep`,size:1}:t.area,u=o?c.anim:t.anim,d=o?c.projectile:t.projectile;if(i?.move,this.emit({t:`act`,unit:e.id,ability:r.abilityId,target:n,anim:u}),d){let r=Df(e,t.range);this.emit({t:`projectile`,from:{x:e.x,y:e.y},fromUnit:e.id,to:n,kind:d,arc:r.kind===`arc`||d===`bomb`})}let f=Nf(this,e,l,e,n),p=(i?.element??(o?s.element:void 0)??this.firstElement(t))||`physical`;if(l.shape!==`single`&&this.emit({t:`aoe`,center:n,tiles:f.map(e=>({x:e.x,y:e.y})),element:p,ability:r.abilityId}),l.shape===`single`&&t.effects.some(e=>e.k===`damage`)){let t=this.unitAt(n.x,n.y);if(t&&t.team!==e.team)for(let e of this.units){if(e===t||e.team!==t.team||!q(e)||!pf(e)||!G(e,`guardian`)||ef(e,t)!==1)continue;this.text(e,`Intercept!`,`info`);let n={x:e.x,y:e.y};e.x=t.x,e.y=t.y,t.x=n.x,t.y=n.y,this.emit({t:`leap`,unit:e.id,from:n,to:{x:e.x,y:e.y},kind:`dash`}),this.emit({t:`leap`,unit:t.id,from:{x:e.x,y:e.y},to:n,kind:`dash`}),f=[this.map.at(e.x,e.y)];break}}let m=new Map,h=t.effects.some(e=>e.k===`damage`),g=h||t.effects.some(e=>e.k===`status`&&Gd[e.status].kind===`debuff`||e.k===`knockback`||e.k===`steal`),_=t.effects.find(e=>e.k===`chain`),v=null;for(let a of t.effects){let o=Ff(a,t.target),s=Lf(this,f).filter(t=>If(e,t,o));switch(a.k){case`damage`:for(let n of s){if(!q(n)||t.area.shape===`single`&&n.team!==e.team&&!Rf(e,n)&&t.target!==`tile`)continue;let i=this.strike(e,n,a,t,r,l.shape);i?m.set(n.id,!0):m.has(n.id)||m.set(n.id,!1),i&&!v&&(v=n)}break;case`heal`:for(let t of s)q(t)&&this.healUnit(e,t,this.healAmount(e,t,a,r.potency));if(i?.id===`wildBond`){let t=this.wolfOf(e);t&&this.healUnit(e,t,this.healAmount(e,t,a,1))}break;case`status`:for(let n of s)q(n)&&(h&&m.get(n.id)!==!0&&n.team!==e.team||Gd[a.status].kind===`debuff`&&n.team!==e.team&&this.spellNegated(e,n,t)||this.rng.chance(a.chance)&&this.applyStatus(n,a.status,a.turns,a.value,e.id));break;case`cleanse`:for(let e of s){if(!q(e))continue;let t=a.kind===`debuff`?[`debuff`]:[`buff`,`stance`],n=0;for(let r of[...e.statuses])if(t.includes(Gd[r.id].kind)&&r.id!==`airborne`){if(a.count!==void 0&&n>=a.count)break;this.removeStatus(e,r.id),n++}a.kind===`debuff`&&n>0&&this.text(e,`Cleansed`,`good`)}break;case`knockback`:for(let t of s){if(!q(t)||h&&m.get(t.id)!==!0)continue;let r=a.fromCenter&&(t.x!==n.x||t.y!==n.y)?n:{x:e.x,y:e.y};this.push(t,r,a.dist,e)}break;case`mp`:for(let e of s){if(!q(e))continue;let t=Math.round(((a.amount??0)+(a.pct??0)*e.stats.mp)*r.potency),n=e.mp;e.mp=Math.min(e.stats.mp,e.mp+t),this.emit({t:`mp`,unit:e.id,amount:e.mp-n,mp:e.mp})}break;case`surge`:for(let e of s)this.addSurge(e,a.amount);break;case`revive`:for(let e of s)e.ko&&!e.gone&&this.revive(e,a.pct);break;case`tile`:this.placeTileEffect(e,a.effect,a.duration,f,a.hidden??!1,a.amount);break;case`summon`:this.summonWolf(e,n);break;case`steal`:{let t=s[0];if(!t)break;let n=this.pouches[t.team],r=Object.keys(n).filter(e=>n[e]>0).sort();if(r.length===0){this.text(t,`Nothing to steal`,`info`);break}let i=this.rng.pick(r);n[i]--,this.pouches[e.team][i]=(this.pouches[e.team][i]??0)+1,this.emit({t:`item`,team:t.team,item:i,count:n[i]}),this.emit({t:`item`,team:e.team,item:i,count:this.pouches[e.team][i]}),this.text(e,`Stole ${Ud(i).name}`,`good`);break}case`faceAway`:for(let t of s)q(t)&&m.get(t.id)!==!1&&(t.facing=tf(e,t),this.emit({t:`face`,unit:t.id,dir:t.facing}));break;case`chain`:break;case`special`:if(a.id===`sicEm`)this.sicEm(e,n);else if(a.id===`trapField`){let t=f.filter(e=>this.map.standable(e)&&this.map.walkable(e)&&!this.unitAt(e.x,e.y)&&!this.trapAt(e));this.placeTileEffect(e,`snare`,120,t,!0)}}}if(_&&_.k===`chain`&&v&&this.chainFrom(e,v,t,_,r),o)for(let[t,n]of m){if(!n)continue;let r=this.unit(t);q(r)&&(s.onHit&&this.rng.chance(s.onHit.chance)&&this.applyStatus(r,s.onHit.status,s.onHit.turns,void 0,e.id),K(e,`markingShots`)&&this.applyStatus(r,`marked`,1,void 0,e.id))}if(g&&G(e,`stealth`)&&this.removeStatus(e,`stealth`),!r.reaction&&i&&i.school===`physical`&&l.shape===`single`&&h){let t=this.unitAt(n.x,n.y);if(t&&t.team!==e.team&&q(t)&&q(e)&&ef(t,e)===1&&m.has(t.id)){let n=0;G(t,`riposte`)&&(n=100),K(t,`enGarde`)&&(n=Math.max(n,35)),K(t,`counter`)&&(n=Math.max(n,25)),n>0&&!G(t,`stun`)&&!G(t,`frozen`)&&jf(this,t,Ef(t),t,this.map.at(e.x,e.y))&&this.rng.chance(n)&&(this.text(t,`Counter!`,`info`),this.reactionAttack(t,e))}}}firstElement(e){for(let t of e.effects)if(t.k===`damage`)return t.element}reactionAttack(e,t){let n=hd(`attack`),r=kd[Id(e.gear.weapon).kind];e.facing=tf(e,t),this.emit({t:`face`,unit:e.id,dir:e.facing}),this.emit({t:`act`,unit:e.id,ability:`attack`,target:{x:t.x,y:t.y},anim:r.anim}),r.projectile&&this.emit({t:`projectile`,from:{x:e.x,y:e.y},fromUnit:e.id,to:{x:t.x,y:t.y},kind:r.projectile,arc:r.range.kind===`arc`});let i=n.effects[0];if(i.k!==`damage`)return;let a=this.strike(e,t,i,n,{abilityId:`attack`,isBasic:!0,reaction:!0,potency:1,item:null},`single`),o=Id(e.gear.weapon);a&&q(t)&&o.onHit&&this.rng.chance(o.onHit.chance)&&this.applyStatus(t,o.onHit.status,o.onHit.turns,void 0,e.id)}chainFrom(e,t,n,r,i){let a=n.effects.find(e=>e.k===`damage`);if(!a||a.k!==`damage`)return;let o=r.bounces+ +!!K(e,`conductive`)+ +!!K(e,`stormAffinity`),s=new Set([t.id]),c=[{x:e.x,y:e.y},{x:t.x,y:t.y}],l=t,u=a.power;for(;o>0;){Jd[this.map.at(l.x,l.y).terrain].wet&&o++;let t=this.units.filter(t=>q(t)&&pf(t)&&t.team!==e.team&&!s.has(t.id)&&ef(t,l)<=r.range).sort((e,t)=>ef(e,l)-ef(t,l)||e.id-t.id)[0];if(!t)break;o--,u*=r.falloff,s.add(t.id),c.push({x:t.x,y:t.y}),this.strike(e,t,{...a,power:u},n,i,`single`),l=t,o=Math.min(o,5)}c.length>2&&this.emit({t:`chain`,points:c})}sicEm(e,t){let n=this.wolfOf(e),r=this.unitAt(t.x,t.y);if(n&&r){if(ef(n,r)>1){let e=this.landingNear(r,n,!1);if(!e)return;let t={x:n.x,y:n.y};n.x=e.x,n.y=e.y,this.emit({t:`leap`,unit:n.id,from:t,to:e,kind:`dash`})}n.facing=tf(n,r),this.emit({t:`face`,unit:n.id,dir:n.facing}),this.emit({t:`act`,unit:n.id,ability:`bite`,target:t,anim:`bite`}),this.strike(n,r,{k:`damage`,power:115,stat:`atk`},hd(`bite`),{abilityId:`sicEm`,isBasic:!1,reaction:!0,potency:1,item:null},`single`)&&q(r)&&this.rng.chance(60)&&this.applyStatus(r,`bleed`,3,void 0,n.id)}}spellNegated(e,t,n){return!(`school`in n)||n.school!==`spell`||t.team===e.team||!K(t,`spellguard`)||t.flags.spellguard?!1:(t.flags.spellguard=!0,this.text(t,`Spellguard!`,`good`),!0)}strike(e,t,n,r,i,a){if(this.spellNegated(e,t,r))return!1;let o=n.hits??(i.isBasic&&K(e,`doubleShot`)?2:1),s=!1;for(let c=0;c<o&&q(t)&&q(e);c++){let o=this.calcDamage(e,t,n,r,i,a);if(!this.rng.chance(o.hit)){this.emit({t:`miss`,unit:t.id});continue}s=!0;let c=n.alwaysCrit||this.rng.chance(o.crit),l=o.base*this.rng.range(.92,1.08)*(c?1.5:1);n.perDebuffPct&&(l+=t.stats.hp*n.perDebuffPct*ff(t)),l=Math.max(1,Math.round(l));let u=this.elementOf(e,n,i),d=n.stat===`atk`&&!n.flat;d&&G(t,`frozen`)&&(this.removeStatus(t,`frozen`),this.text(t,`Shatter!`,`crit`));let f=this.dealDamage(e,t,l,u,c,o.back,{ignoreBarrier:n.ignoreBarrier,melee:d&&ef(e,t)===1});n.lifesteal&&f>0&&q(e)&&this.healUnit(e,e,Math.round(f*n.lifesteal)),d&&f>0&&K(e,`lifesteal`)&&q(e)&&this.healUnit(e,e,Math.round(f*.2)),u===`frost`&&K(e,`frostbite`)&&q(t)&&this.rng.chance(60)&&this.applyStatus(t,`slow`,1,void 0,e.id)}return n.recoil&&q(e)&&this.dealDamage(null,e,Math.round(e.stats.hp*n.recoil),`physical`,!1,!1,{dot:!0}),s}elementOf(e,t,n){return t.element?t.element:t.weaponElement||n.isBasic?Id(e.gear.weapon).element??`physical`:`physical`}resistMult(e,t){return Math.max(0,(100-e.resist[t])/100)}calcDamage(e,t,n,r,i,a){let o=this.map.at(e.x,e.y),s=this.map.at(t.x,t.y),c=n.stat===`atk`&&!n.flat,l=this.elementOf(e,n,i),u=Df(e,r.range),d=u.kind===`arc`||u.kind===`direct`,f=o.h-s.h,p=!1,m=!1,h=a===`single`||a===`line`||a===`sweep`;if(h&&(e.x!==t.x||e.y!==t.y)){let n=tf(t,e);n===(t.facing+2)%4?p=!0:n!==t.facing&&(m=!0)}let g;if(n.flat!==void 0)g=n.flat*i.potency*(50/(50+t.stats.res));else{let r=c?e.stats.atk:e.stats.mag,a=c?t.stats.def:t.stats.res,o=(n.pierce??0)+(i.isBasic?Id(e.gear.weapon).pierce??0:0);a*=Math.max(0,1-o),g=r*n.power/100*1.75*(50/(50+a))}let _=this.resistMult(t,l);if(c){let t=Math.max(-4,Math.min(6,f))*.07;if(K(e,`plunge`)&&(t*=2),d&&K(e,`eaglesPerch`)&&(t*=2),_*=1+t,h){let t=kd[Id(e.gear.weapon).kind];p?_*=n.backMult??(i.isBasic?t.backMult:void 0)??1.35:m&&(_*=1.15)}}let v=t=>e.passives.filter(e=>e===t).length;l===`fire`&&(_*=1.2**v(`fireAffinity`)),l===`frost`&&(_*=1.2**v(`frostAffinity`)),l===`storm`&&(_*=1.15**v(`stormAffinity`)),l===`shadow`&&(_*=1.2**v(`shadowAffinity`)),l===`fire`&&K(e,`kindling`)&&G(t,`burn`)&&(_*=1.4),l===`storm`&&Jd[s.terrain].wet&&(_*=K(e,`conductive`)?2:1.5),G(e,`might`)&&(_*=1.25),G(t,`marked`)&&(_*=1.25),c&&G(t,`fortify`)&&(_*=.7),!c&&G(t,`ward`)&&(_*=.7);let y=df(e,`taunt`);y&&y.source!==t.id&&(_*=.5),c&&G(t,`frozen`)&&(_*=1.5),K(e,`bloodlust`)&&(_*=1+.5*(1-e.hp/e.stats.hp));let b=ff(t);if(K(e,`malice`)&&(_*=1+.15*b),K(e,`quarry`)&&(G(t,`root`)||G(t,`slow`))&&(_*=1.3),K(e,`packTactics`)){let n=this.partnerOf(e);n&&pf(n)&&ef(n,t)===1&&(_*=1.25)}K(e,`oath`)&&this.units.some(t=>t!==e&&t.team===e.team&&q(t)&&pf(t)&&ef(t,e)===1)&&(_*=1.15),K(e,`fury`)&&(_*=1.25),K(t,`fury`)&&(_*=1.2),i.reaction&&K(e,`quickdraw`)&&(_*=1.5),n.bonusVs&&G(t,n.bonusVs.status)&&(_*=n.bonusVs.mult),n.bonusVsDebuffed&&b>0&&(_*=n.bonusVsDebuffed),g*=_;let x=100;if(c&&!n.sure){let n=(`acc`in r&&r.acc||95)+Math.max(-15,Math.min(15,f*3)),i=gf(t)*(p?.15:m?.6:1);d&&!K(e,`farsight`)&&(i+=Jd[s.terrain].cover,s.effects.some(e=>e.id===`smoke`)&&(i+=40)),G(e,`blind`)&&(n-=40),x=Math.max(5,Math.min(100,Math.round(n-i)))}let S=0;c&&(S=e.stats.crit+(n.critBonus??0)+(p?10:0),K(e,`opportunist`)&&b>0&&(S+=30),S=Math.max(0,Math.min(100,S))),n.alwaysCrit&&(S=100);let C=!c&&`school`in r&&r.school===`spell`&&K(t,`spellguard`)&&!t.flags.spellguard&&t.team!==e.team;return{hit:x,crit:S,base:g,back:p,side:m,negated:C}}healAmount(e,t,n,r){let i=0;return n.power&&(i+=e.stats.mag*(n.power/100)*1.2*1.2**e.passives.filter(e=>e===`healAffinity`).length),n.pct&&(i+=t.stats.hp*n.pct),n.amount&&(i+=n.amount),i*=r,G(t,`poison`)&&(i*=.5),Math.round(i)}dealDamage(e,t,n,r,i,a,o){if(!q(t))return 0;let s=0,c=df(t,`barrier`);c&&!o.ignoreBarrier&&(s=Math.min(c.value??0,n),c.value=(c.value??0)-s,(c.value??0)<=0&&this.removeStatus(t,`barrier`));let l=Math.min(t.hp,n-s);return t.hp-=l,this.emit({t:`damage`,unit:t.id,amount:n-s,crit:i,element:r,absorbed:s,hp:t.hp,back:a}),l>0&&G(t,`stealth`)&&!o.dot&&this.removeStatus(t,`stealth`),this.addSurge(t,35*(n-s)/t.stats.hp),e&&e.team!==t.team&&this.addSurge(e,6),t.hp<=0&&this.knockOut(t,e),e&&o.melee&&K(t,`thorns`)&&q(e)&&l>0&&this.dealDamage(null,e,Math.max(1,Math.round(l*.2)),`physical`,!1,!1,{dot:!0}),l}healUnit(e,t,n){if(!q(t)||n<=0)return;let r=t.stats.hp-t.hp,i=Math.min(r,n);if(t.hp+=i,this.emit({t:`heal`,unit:t.id,amount:i,hp:t.hp}),e&&K(e,`overflow`)&&n>i){let r=Math.round(t.stats.hp*.2),a=df(t,`barrier`),o=a?.value??0,s=Math.min(n-i,r-o);s>0&&(a?a.value=o+s:this.applyStatus(t,`barrier`,3,s,e.id))}e&&i>0&&e!==t&&this.addSurge(e,4)}knockOut(e,t){e.hp=0,e.ko=!0,e.koTimer=Hf;for(let t of[...e.statuses])this.removeStatus(e,t.id);for(let t of[...this.casts])t.casterId===e.id&&(this.casts=this.casts.filter(e=>e!==t),this.emit({t:`castEnd`,id:t.id,interrupted:!0}));this.emit({t:`ko`,unit:e.id}),this.pushLog(`${e.name} falls${t?` to ${t.name}`:``}.`),t&&t.team!==e.team&&this.addSurge(t,12);for(let t of this.units)t!==e&&t.team===e.team&&q(t)&&this.addSurge(t,10);e.summonerId!==null&&(e.gone=!0,this.emit({t:`gone`,unit:e.id})),this.checkWinner()}revive(e,t){e.ko&&!e.gone&&(e.ko=!1,e.koTimer=0,e.hp=Math.max(1,Math.round(e.stats.hp*t)),this.emit({t:`revive`,unit:e.id,hp:e.hp}),this.pushLog(`${e.name} is back on their feet.`))}applyStatus(e,t,n,r,i){if(!pf(e)&&t!==`airborne`||e.ko)return!1;if(_f(e,t))return this.text(e,`Immune`,`info`),!1;if(t===`stealth`&&G(e,`marked`))return!1;if(t===`haste`&&G(e,`slow`))return this.removeStatus(e,`slow`),!0;if(t===`slow`&&G(e,`haste`))return this.removeStatus(e,`haste`),!0;t===`marked`&&G(e,`stealth`)&&this.removeStatus(e,`stealth`);let a=this.turn&&this.turn.unitId===e.id?n+1:n,o=df(e,t);if(o)return o.turns=Math.max(o.turns,a),r!==void 0&&(o.value=Math.max(o.value??0,r)),i!==void 0&&(o.source=i),this.emit({t:`status`,unit:e.id,status:t,on:!0}),!0;if(e.statuses.push({id:t,turns:a,value:r,source:i}),this.emit({t:`status`,unit:e.id,status:t,on:!0}),(t===`stun`||t===`frozen`)&&this.casts.some(t=>t.casterId===e.id))for(let t of[...this.casts])t.casterId!==e.id||G(e,`airborne`)||(this.casts=this.casts.filter(e=>e!==t),this.emit({t:`castEnd`,id:t.id,interrupted:!0}),this.text(e,`Interrupted`,`bad`));return!0}removeStatus(e,t){let n=e.statuses.length;e.statuses=e.statuses.filter(e=>e.id!==t),e.statuses.length!==n&&this.emit({t:`status`,unit:e.id,status:t,on:!1})}addSurge(e,t){if(!q(e)||e.summonerId!==null&&e.subclassId!==`wolf`)return;let n=e.surge;e.surge=Math.min(100,e.surge+t*(K(e,`surgeBoost`)?1.5:1)),Math.floor(e.surge)!==Math.floor(n)&&this.emit({t:`surge`,unit:e.id,value:e.surge}),n<100&&e.surge>=100&&this.emit({t:`surgeReady`,unit:e.id})}push(e,t,n,r){if(K(e,`anchored`)){this.text(e,`Anchored`,`info`);return}if(t.x===e.x&&t.y===e.y)return;let i=Zd[tf(t,e)],a=n+ +!!K(r,`brutal`),o=[{x:e.x,y:e.y}],s=this.map.at(e.x,e.y),c=0,l=null,u=!1;for(let e=0;e<a;e++){let e=this.map.get(s.x+i.dx,s.y+i.dy);if(!e){l={other:null};break}if(Jd[e.terrain].lethal&&(!e.prop||this.map.walkable(e))){o.push({x:e.x,y:e.y}),u=!0,s=e;break}let t=this.unitAt(e.x,e.y);if(!this.map.walkable(e)||e.h-s.h>1||t){l={other:t??null};break}c+=Math.max(0,s.h-e.h),s=e,o.push({x:e.x,y:e.y})}o.length>1&&(e.x=s.x,e.y=s.y,this.emit({t:`push`,unit:e.id,path:o,fall:c}));let d=K(r,`brutal`)?1.5:1;u?(this.text(e,Jd[s.terrain].name===`Chasm`?`Into the abyss!`:`Swept away!`,`crit`),this.dealDamage(r,e,e.hp,`physical`,!1,!1,{ignoreBarrier:!0}),e.ko&&(e.gone=!0,this.emit({t:`gone`,unit:e.id}))):(l&&(this.emit({t:`collide`,unit:e.id,other:l.other?l.other.id:null}),this.dealDamage(r,e,Math.round(e.stats.hp*.1*d),`physical`,!1,!1,{}),l.other&&q(l.other)&&this.dealDamage(r,l.other,Math.round(l.other.stats.hp*.08*d),`physical`,!1,!1,{})),c>3&&q(e)&&!K(e,`featherfall`)&&this.dealDamage(r,e,Math.round(e.stats.hp*.07*(c-2)),`physical`,!1,!1,{}),o.length>1&&q(e)&&this.enterTile(e,s,!1,null))}pull(e,t){if(K(e,`anchored`)){this.text(e,`Anchored`,`info`);return}let n=Zd[tf(e,t)],r=[{x:e.x,y:e.y}],i=this.map.at(e.x,e.y),a=0;for(;ef(i,t)>1;){let e=this.map.get(i.x+n.dx,i.y+n.dy);if(!e||!this.map.walkable(e)||!this.map.standable(e)||e.h-i.h>2||this.unitAt(e.x,e.y))break;a+=Math.max(0,i.h-e.h),i=e,r.push({x:e.x,y:e.y})}r.length<=1||(e.x=i.x,e.y=i.y,this.emit({t:`push`,unit:e.id,path:r,fall:a}),this.text(e,`Yanked!`,`info`),a>3&&!K(e,`featherfall`)&&this.dealDamage(t,e,Math.round(e.stats.hp*.07*(a-2)),`physical`,!1,!1,{}),q(e)&&this.enterTile(e,i,!1,null))}placeTileEffect(e,t,n,r,i,a){for(let o of r){let r=Jd[o.terrain];r.standable&&(t===`fire`&&r.wet||(t!==`icewall`||!this.unitAt(o.x,o.y)&&!o.effects.some(e=>e.id===`icewall`))&&(o.effects=o.effects.filter(e=>e.id!==t),o.effects.push({id:t,until:this.tick+n,team:e.team,source:e.id,hidden:i||void 0,amount:a}),t===`icewall`&&(this.map.recomputeHeight(o),this.emit({t:`terrain`,x:o.x,y:o.y,h:o.h})),this.emit({t:`tile`,x:o.x,y:o.y,effect:t,on:!0,team:e.team,hidden:i})))}}summonWolf(e,t){let n=Td.wolf,r={name:`${e.name}'s Wolf`,subclassId:`wolf`,gear:{...n.defaultGear}},i=of(this.nextUnitId++,e.team,r,e.seed*13+this.nextUnitId>>>0,e.ai);i.summonerId=e.id,i.x=t.x,i.y=t.y,i.facing=e.facing,i.ct=Math.min(80,e.ct),this.units.push(i),this.emit({t:`summon`,unit:i.id}),this.pushLog(`${e.name} calls a wolf.`)}checkWinner(){if(this.winner!==null)return;let e=e=>this.units.some(t=>t.team===e&&q(t)&&t.summonerId===null),t=e(0),n=e(1);t&&n||this.setWinner(+!t)}setWinner(e){this.winner===null&&(this.winner=e,this.turn=null,this.emit({t:`end`,winner:e}),this.pushLog(e===0?`Victory!`:`Defeat.`))}preview(e,t,n,r){let i=`school`in t?t:null,a=r===`attack`,o={abilityId:r,isBasic:a,reaction:!1,potency:!i&&K(e,`quartermaster`)?1.5:1,item:i?null:t},s=e.x,c=e.y;i?.move===`leap`&&(e.x=n.x,e.y=n.y);try{let r=a&&K(e,`cleaving`)?{shape:`sweep`,size:1}:t.area,s=Nf(this,e,r,e,n),c=new Map,l=t=>{let n=c.get(t.id);return n||(n={unit:t,hits:0,hit:0,crit:0,dmgMin:0,dmgMax:0,expected:0,heal:0,statuses:[],knockback:!1,revive:!1,ally:t.team===e.team,back:!1,side:!1,negated:!1},c.set(t.id,n)),n},u=t.effects.find(e=>e.k===`damage`);for(let n of t.effects){let i=Ff(n,t.target),c=Lf(this,s).filter(t=>If(e,t,i));for(let i of c)if(n.k===`damage`){if(t.area.shape===`single`&&i.team!==e.team&&!Rf(e,i)&&t.target!==`tile`)continue;let s=this.calcDamage(e,i,n,t,o,r.shape),c=l(i),u=n.hits??(a&&K(e,`doubleShot`)?2:1),d=n.perDebuffPct?i.stats.hp*n.perDebuffPct*ff(i):0;c.hits=u,c.hit=s.hit,c.crit=n.alwaysCrit?100:s.crit;let f=n.alwaysCrit?1.5:1;c.dmgMin+=Math.max(1,Math.round((s.base*.92*f+d)*u)),c.dmgMax+=Math.max(1,Math.round((s.base*1.08*(s.crit>0?1.5:1)+d)*u)),c.expected+=s.negated?0:(u*s.base*f*(1+(n.alwaysCrit?0:.5*s.crit/100))+d)*(s.hit/100),c.back=s.back,c.side=s.side,c.negated=s.negated}else if(n.k===`heal`)l(i).heal+=this.healAmount(e,i,n,o.potency);else if(n.k===`status`){if(_f(i,n.status))continue;let t=u&&i.team!==e.team?(l(i).hit||100)/100:1;l(i).statuses.push({id:n.status,chance:Math.round(n.chance*t)})}else n.k===`knockback`?K(i,`anchored`)||(l(i).knockback=!0):n.k===`revive`?l(i).revive=!0:(n.k===`cleanse`||n.k===`mp`||n.k===`faceAway`||n.k===`steal`)&&l(i)}if(i?.id===`sicEm`){let t=this.unitAt(n.x,n.y),r=this.wolfOf(e);if(t&&r){let e=this.calcDamage(r,t,{k:`damage`,power:115,stat:`atk`},hd(`bite`),o,`single`),n=l(t);n.hits=1,n.hit=e.hit,n.crit=e.crit,n.dmgMin=Math.round(e.base*.92),n.dmgMax=Math.round(e.base*1.08*1.5),n.expected=e.base*(1+.5*e.crit/100)*(e.hit/100),n.statuses.push({id:`bleed`,chance:60})}}return[...c.values()]}finally{e.x=s,e.y=c}}timeline(e){let t=this.units.filter(e=>!e.gone&&!G(e,`airborne`)).map(e=>({id:e.id,ct:e.ct,spd:e.ko?e.stats.spd:mf(e),ko:e.ko})),n=this.casts.map(e=>({...e})),r=[],i=this.active();if(i){r.push({kind:`unit`,unitId:i.id,ko:!1,active:!0});let e=t.find(e=>e.id===i.id);e&&(e.ct-=Vf)}let a=this.tick,o=0;for(;r.length<e&&o++<5e3;){let e=t.filter(e=>e.ct>=Vf).sort((e,t)=>t.ct-e.ct||e.id-t.id)[0];if(e)r.push({kind:`unit`,unitId:e.id,ko:e.ko,active:!1}),e.ct-=Vf;else{a++;for(let e of n.filter(e=>e.resolveAt<=a))r.push({kind:`cast`,castId:e.id,casterId:e.casterId,ability:e.ability}),n.splice(n.indexOf(e),1);for(let e of t)e.ct+=e.spd}}return r.slice(0,e)}emit(e){this.events.push(e)}text(e,t,n){this.emit({t:`text`,unit:e.id,text:t,tone:n})}pushLog(e){this.log.push(e),this.emit({t:`log`,text:e})}flush(){let e=this.events;return this.events=[],e}};function Gf(e){return[`attack`,...e.abilities,e.surgeAbility]}function Kf(e,t){let n=Df(e,hd(t).range);switch(n.kind){case`self`:return`Self`;case`melee`:return n.min===0?`Self/adjacent`:`Adjacent`;case`reach`:return`Line ${n.max}`;case`arc`:return`Arc ${n.min}-${n.max}`;case`direct`:return`Direct ${n.min}-${n.max}`;case`magic`:return n.min===n.max?`${n.max}`:`${n.min}-${n.max}`;default:return``}}var qf={tank:.5,striker:1.2,ranged:2.8,caster:3.2,healer:4,support:2.8,beast:.7},Jf={tank:1,striker:1,ranged:4,caster:4,healer:4,support:3,beast:1},Yf={tank:.85,striker:1.05,ranged:1.1,caster:1.2,healer:1.25,support:1.1,beast:.7};function Xf(e,t){let n=e.units.filter(e=>e.team!==t.team&&q(e)&&pf(e)),r={b:e,u:t,enemies:n,allies:e.units.filter(e=>e.team===t.team&&!e.gone&&pf(e)&&e!==t),dist:wf(e,t,n.map(e=>({x:e.x,y:e.y}))),danger:e.dangerTiles(t.team),avgEnemyH:n.length?n.reduce((t,n)=>t+e.map.at(n.x,n.y).h,0)/n.length:0},i=Zf(e,t),a={x:t.x,y:t.y},o=e.turn,s=o.moved?[a]:[a,...Cf(e,t).filter(e=>e.x!==t.x||e.y!==t.y)],c={moveTo:null,actFirst:!1,action:null,score:-1/0},l=null;for(let n of s){let o=n.x===a.x&&n.y===a.y;t.x=n.x,t.y=n.y;try{let t=sp(r,e.map.at(n.x,n.y));t+0>c.score&&(c={moveTo:o?null:n,actFirst:!1,action:null,score:t});for(let a of i)if(!(a.kind===`ability`&&`planted`in a.use&&a.use.planted&&!o)&&!(a.kind===`ability`&&`usesMove`in a.use&&a.use.usesMove&&!o))for(let i of Qf(r,a)){let s=$f(r,a,i);if(s.score<=.5)continue;let u=s.endPos??n,d=s.score+(s.endPos?sp(r,e.map.at(u.x,u.y)):t),f={kind:a.kind,id:a.id,target:{x:i.x,y:i.y}};if(d>c.score&&(c={moveTo:o?null:n,actFirst:!1,action:f,score:d}),o&&(!l||s.score>l.score)){let e=a.kind===`ability`&&`planted`in a.use&&!!a.use.planted||!!s.endPos;l={action:f,score:s.score,endPos:e?u:null}}}}finally{t.x=a.x,t.y=a.y}}if(l&&!l.endPos&&!o.moved)for(let n of s){if(n.x===a.x&&n.y===a.y)continue;t.x=n.x,t.y=n.y;let i=sp(r,e.map.at(n.x,n.y));t.x=a.x,t.y=a.y;let o=l.score+i-.5;o>c.score&&(c={moveTo:n,actFirst:!0,action:l.action,score:o})}return c}function Zf(e,t,n=!1){let r=[],i=e.turn;for(let a of Gf(t)){let o=hd(a);(o.usesMove?i.moved||n||G(t,`root`):i.acted)||n&&o.planted||o.surge&&t.surge<100||vf(t,o.mp)>t.mp||(t.cooldowns[a]??0)>0||o.school===`spell`&&G(t,`silence`)||o.effects.some(e=>e.k===`summon`)&&e.wolfOf(t)||(!o.effects.some(e=>e.k===`special`&&e.id===`sicEm`)||e.wolfOf(t))&&o.move!==`sprint`&&o.id!==`iceWall`&&r.push({id:a,kind:`ability`,use:o})}let a=e.pouches[t.team];if(i.acted)return r;for(let n of Object.keys(a))(a[n]??0)<=0||r.push({id:n,kind:`item`,use:e.itemUse(t,n)});return r}function Qf(e,t){let{b:n,u:r}=e,i=n.targetsFor(r,t.use);if(t.use.target!==`tile`&&t.use.target!==`empty`)return i;let a=t.use.area.shape===`radius`?t.use.area.size+1:2,o=n.units.filter(e=>q(e)&&pf(e));return i.filter(e=>o.some(t=>ef(t,e)<=a))}function $f(e,t,n){let{b:r,u:i}=e,a=t.use,o=t.kind===`ability`?a:null,s=0,c=null;if(o?.move===`leap`&&(c={x:n.x,y:n.y}),o?.usesMove){let t=null;if(o.move===`shadowstep`){let e=r.unitAt(n.x,n.y);t=e?r.landingNear(e,i,!0):null}else t={x:n.x,y:n.y};return t?{score:ep(e,t)-vf(i,o.mp)*.35,endPos:t}:{score:0,endPos:null}}if(o?.move===`grapple`){let t=r.unitAt(n.x,n.y);if(!t)return{score:0,endPos:null};let a=t.role===`caster`||t.role===`healer`||t.role===`ranged`,o=e.allies.filter(e=>q(e)&&(e.role===`striker`||e.role===`tank`)&&ef(e,i)<=3).length;return{score:a&&o>0?10+o*3:0,endPos:null}}let l=r.preview(i,a,{x:n.x,y:n.y},t.kind===`item`?`item:${t.id}`:t.id);for(let t of l)s+=tp(e,t,a);for(let t of a.effects)t.k===`tile`?s+=ip(e,t.effect,n,a):t.k===`summon`?s+=55:t.k===`special`&&t.id===`trapField`?s+=rp(e,n)*3:t.k===`mp`&&t.to===`self`&&(s+=i.mp<i.stats.mp*.35?22:0);if(o){if(o.tag===`buff`&&o.target===`self`&&(s+=np(e,o)),s-=vf(i,o.mp)*.35,o.castTime){let e=l.filter(e=>!e.ally&&e.hits>0).every(e=>G(e.unit,`root`)||G(e.unit,`stun`)||G(e.unit,`frozen`));s*=e||o.follow?.92:.7}o.surge&&(s-=12)}else s-=(Ud(t.id).cost??1)*4;return{score:s,endPos:c}}function ep(e,t){let{b:n,u:r}=e,i=r.x,a=r.y;r.x=t.x,r.y=t.y;let o=0;try{for(let t of Zf(n,r,!0))for(let n of Qf(e,t))o=Math.max(o,$f(e,t,n).score)}finally{r.x=i,r.y=a}return o}function tp(e,t,n){let r=t.unit,i=r.team!==e.u.team,a=0;if(t.hits>0&&!t.negated){let e=r.statuses.find(e=>e.id===`barrier`)?.value??0,n=t.expected,o=r.hp+e,s=Math.min(n,o)/r.stats.hp*100,c=t.dmgMin>=o?t.hit/100:t.dmgMax>=o?t.hit/100*.35:0;i?a+=(s+c*45)*Yf[r.role]:a-=s*1.4+c*80}if(t.heal>0){let e=Math.min(t.heal,r.stats.hp-r.hp)/r.stats.hp*100,n=r.hp/r.stats.hp<.4?1.6:1;a+=i?-e:e*.9*n}for(let n of t.statuses){let t=Gd[n.id],o=r.statuses.some(e=>e.id===n.id),s=t.aiValue*(n.chance/100)*(o?.25:1);n.id===`stealth`&&r===e.u&&(s*=ap(e,e.b.map.at(r.x,r.y))>0?1.2:.3),n.id===`taunt`&&(s*=r.role===`tank`?.4:1),(n.id===`regen`||n.id===`barrier`)&&(s*=r.hp/r.stats.hp<.8?1:.4),a+=i?-s:s}if(t.knockback&&i&&(a+=3),t.revive&&(a+=i?-90:95),!i&&t.hits===0&&t.heal===0&&t.statuses.length===0&&!t.revive&&n.effects.some(e=>e.k===`cleanse`)){let e=r.statuses.filter(e=>Gd[e.id].kind===`debuff`).length;a+=e*9}return i&&n.effects.some(e=>e.k===`steal`)&&(a+=Object.values(e.b.pouches[r.team]).some(e=>e>0)?6:0),a}function np(e,t){let{u:n}=e,r=e.enemies.filter(e=>ef(e,n)<=hf(e)+2).length;switch(t.id){case`overwatchShot`:case`setSpear`:return r*4;case`riposteStance`:return e.enemies.filter(e=>ef(e,n)<=hf(e)+1&&Ef(e).kind===`melee`).length*5;case`guardianStance`:return e.allies.filter(e=>q(e)&&ef(e,n)===1&&e.role!==`tank`).length*7*Math.min(1,r);default:return 0}}function rp(e,t){let n=0;for(let r of e.enemies){let i=ef(r,t);if(i<1||i>hf(r))continue;let a=e.dist[e.b.map.key(t.x,t.y)]<e.dist[e.b.map.key(r.x,r.y)]+1;n=Math.max(n,(a?10:4)-Math.abs(i-2)*2)}return Math.max(0,n)}function ip(e,t,n,r){let{b:i,u:a}=e;switch(t){case`snare`:case`firetrap`:return rp(e,n)*(t===`firetrap`?1.3:1);case`caltrops`:return e.enemies.filter(e=>ef(e,n)<=3).length*4;case`fire`:return e.enemies.filter(e=>ef(e,n)<=1).length*5-e.allies.filter(e=>ef(e,n)<=1).length*8;case`holy`:{let t=1+4*r.area.size;return e.allies.filter(e=>ef(e,a)<=1).length*6+(a.hp<a.stats.hp*.7?6:0)+e.enemies.filter(e=>ef(e,a)<=1).length*4+t*0}case`smoke`:return 0;default:return 0}}function ap(e,t){let n=0;for(let r of e.enemies){if(G(r,`stun`)||G(r,`frozen`))continue;let e=hf(r)+op(r),i=ef(r,t);i<=e?n+=1:i<=e+2&&(n+=.3)}return n}function op(e){let t=Ef(e).max;for(let n of e.abilities){let r=hd(n);r.effects.some(e=>e.k===`damage`)&&(t=Math.max(t,Df(e,r.range).max))}return Math.min(t,6)}function sp(e,t){let{b:n,u:r}=e,i=n.map.key(t.x,t.y),a=0,o=Math.max(.35,1-n.turnCount/160);a-=ap(e,t)*qf[r.role]*o*(r.hp/r.stats.hp<.4?1.6:1);let s=r.role===`ranged`||r.role===`caster`||r.role===`healer`||r.role===`support`;a+=Math.max(-3,Math.min(5,t.h-e.avgEnemyH))*(s?1.4:.5),e.danger.has(i)&&(a-=30);let c=Jd[t.terrain];c.scorch>0&&(a-=25);for(let e of t.effects)e.id===`fire`&&(a-=14),e.id===`caltrops`&&e.team!==r.team&&(a-=6),e.id===`holy`&&(a+=e.team===r.team?4:-6);c.wet&&e.enemies.some(e=>e.subclassId===`stormcaller`)&&(a-=3),c.cover>0&&s&&(a+=2);let l=e.dist[i];if(l<9999&&e.enemies.length){let e=Jf[r.role];a-=Math.abs(l-e)*(s?1.3:2.2)}if(r.role===`healer`||r.role===`support`||r.role===`tank`){let n=e.allies.filter(e=>q(e)).sort((e,t)=>e.hp/e.stats.hp-t.hp/t.stats.hp)[0];n&&(a-=Math.max(0,ef(n,t)-3)*1.2)}if(r.summonerId!==null){let e=n.unit(r.summonerId);q(e)&&(a-=Math.max(0,ef(e,t)-4)*.5)}return a}function cp(e,t){let n=e.units.filter(e=>e.team!==t.team&&q(e)&&pf(e)),r=t.facing,i=1/0;for(let e=0;e<4;e+=1){let a=0;for(let r of n){let n=ef(r,t);if(n>8)continue;let i=1/Math.max(1,n-1),o=r.x-t.x,s=r.y-t.y,c=o*Zd[e].dx+s*Zd[e].dy,l=Math.abs(o*Zd[e].dy-s*Zd[e].dx);c<0&&Math.abs(c)>=l?a+=3*i:(c<=0||l>c)&&(a+=1*i)}a<i-1e-6&&(i=a,r=e)}return r}var lp=class{speed=1;list=[];run(e,t){return new Promise(n=>{t(0),e<=0?(t(1),n()):this.list.push({t:0,dur:e/1e3,fn:t,resolve:n})})}wait(e){return this.run(e,()=>{})}update(e){let t=e*this.speed,n=[];for(let e of this.list){e.t+=t;let r=Math.min(1,e.t/e.dur);e.fn(r),r>=1&&n.push(e)}if(n.length){this.list=this.list.filter(e=>!n.includes(e));for(let e of n)e.resolve()}}flush(){let e=this.list;this.list=[];for(let t of e)t.fn(1),t.resolve()}get busy(){return this.list.length>0}},up={inOut:e=>e<.5?2*e*e:1-(-2*e+2)**2/2,out:e=>1-(1-e)*(1-e),in:e=>e*e,back:e=>1+2.70158*(e-1)**3+1.70158*(e-1)**2},dp={physical:16777215,fire:16738848,frost:10478591,storm:16773754,radiant:16771488,shadow:10510591,arcane:9097471},fp={arrow:14207136,bolt:10132136,orb:9097471,fire:16738848,frost:10478591,storm:16773754,radiant:16771488,shadow:10510591,bomb:3816e3,net:13152384,hook:11579576,dagger:13684952},pp=class{stage;tw;overlay;group=new Dr;particles=[];texts=[];boxGeo=new za(.06,.06,.06);matCache=new Map;constructor(e,t,n){this.stage=e,this.tw=t,this.overlay=n}mat(e,t=1){let n=e*10+Math.round(t*9),r=this.matCache.get(n);return r||(r=new Vi({color:e,transparent:t<1,opacity:t,depthWrite:t>=1}),this.matCache.set(n,r)),r}burst(e,t,n=14,r=2,i=4,a=.6,o=1){for(let s=0;s<n;s++){let n=new V(this.boxGeo,this.mat(t));n.position.copy(e),n.scale.setScalar(o*(.6+Math.random()*.8));let s=new L(Math.random()-.5,Math.random()*.9+.2,Math.random()-.5).normalize();this.group.add(n),this.particles.push({mesh:n,vel:s.multiplyScalar(r*(.5+Math.random())),life:a*(.7+Math.random()*.6),max:a,gravity:i})}}rise(e,t,n=12){for(let r=0;r<n;r++){let n=new V(this.boxGeo,this.mat(t));n.position.copy(e).add(new L((Math.random()-.5)*.6,Math.random()*.3,(Math.random()-.5)*.6)),this.group.add(n),this.particles.push({mesh:n,vel:new L(0,.8+Math.random()*.8,0),life:.8+Math.random()*.5,max:1.2,gravity:0})}}ring(e,t,n=1,r=420){let i=new Co(.8,1,32);i.rotateX(-Math.PI/2);let a=new Vi({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:2}),o=new V(i,a);return o.position.copy(e).add(new L(0,.05,0)),this.group.add(o),this.tw.run(r,e=>{o.scale.setScalar(.1+up.out(e)*n),a.opacity=.9*(1-e)}).then(()=>{this.group.remove(o),i.dispose(),a.dispose()})}pillar(e,t,n=450){let r=new Va(.5,.5,8,16,1,!0),i=new Vi({color:t,transparent:!0,opacity:.7,depthWrite:!1,side:2,blending:2}),a=new V(r,i);return a.position.copy(e).add(new L(0,4,0)),this.group.add(a),this.tw.run(n,e=>{a.scale.set(1+e*.4,1,1+e*.4),i.opacity=.75*(1-up.in(e))}).then(()=>{this.group.remove(a),r.dispose(),i.dispose()})}area(e,t,n=500){let r=new So(.96,.96);r.rotateX(-Math.PI/2);let i=new Vi({color:t,transparent:!0,opacity:.6,depthWrite:!1,blending:2}),a=e.map(e=>{let t=new V(r,i);return t.position.copy(e).add(new L(0,.04,0)),this.group.add(t),t});return this.tw.run(n,e=>i.opacity=.65*(1-e)).then(()=>{for(let e of a)this.group.remove(e);r.dispose(),i.dispose()})}async projectile(e,t,n,r){let i=fp[n],a;if(n===`arrow`||n===`bolt`||n===`dagger`){let e=new Dr,t=new V(new Va(.012,.012,n===`arrow`?.5:.3,4),this.mat(i));t.rotation.x=Math.PI/2;let r=new V(new Ha(.03,.08,4),this.mat(8421512));r.rotation.x=Math.PI/2,r.position.z=n===`arrow`?.27:.17,e.add(t,r),a=e}else if(n===`hook`)a=new V(new Ha(.05,.14,5),this.mat(i)),a.rotation.x=Math.PI/2;else if(n===`net`)a=new V(new Eo(.16,.025,4,10),this.mat(i));else if(n===`bomb`)a=new V(new wo(.1,8,6),this.mat(i));else{let e=new Dr;e.add(new V(new wo(.11,10,8),this.mat(i))),e.add(new V(new wo(.2,10,8),this.mat(i,.35))),a=e}this.group.add(a);let o=e.clone(),s=t.clone(),c=o.distanceTo(s),l=r?.6+c*.3:0,u=(n===`arrow`||n===`bolt`?140:220)+c*(r?55:40),d=o.clone(),f=0;await this.tw.run(u,e=>{let t=o.clone().lerp(s,e);t.y+=Math.sin(Math.PI*e)*l,a.position.copy(t),t.distanceTo(d)>1e-4&&a.lookAt(t.clone().add(t.clone().sub(d))),d=t,n===`net`&&(a.rotation.z+=.3),f+=1,n!==`arrow`&&n!==`bolt`&&n!==`hook`&&n!==`net`&&f%2==0&&this.burst(t,i,1,.3,0,.35,.8)}),this.group.remove(a)}async lightning(e){let t=[];for(let n=1;n<e.length;n++){let r=e[n-1],i=e[n];for(let e=0;e<=6;e++){let n=r.clone().lerp(i,e/6);e>0&&e<6&&n.add(new L((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3)),t.push(n)}}let n=new ki().setFromPoints(t),r=new ha({color:16774816,transparent:!0,opacity:1}),i=new Ca(n,r);this.group.add(i);for(let t of e.slice(1))this.burst(t,16773754,8,2.5,2,.4);await this.tw.run(380,e=>r.opacity=e<.3?1:1-(e-.3)/.7),this.group.remove(i),n.dispose(),r.dispose()}async bolt(e){await this.lightning([e.clone().add(new L(.3,7,-.2)),e.clone().add(new L(0,.5,0))])}castCircle(e,t){let n=new Dr,r=new V(new Co(.36,.46,6).rotateX(-Math.PI/2),new Vi({color:t,transparent:!0,opacity:.85,depthWrite:!1,side:2})),i=new V(new Co(.2,.25,3).rotateX(-Math.PI/2),new Vi({color:t,transparent:!0,opacity:.7,depthWrite:!1,side:2}));return n.add(r,i),n.position.copy(e).add(new L(0,.04,0)),this.group.add(n),n}remove(e){this.group.remove(e)}text(e,t,n,r=!1){let i=document.createElement(`div`);i.className=`float-text tone-${n}${r?` big`:``}`,i.textContent=t,this.overlay.appendChild(i);let a=this.texts.filter(t=>t.t<.3&&t.pos.distanceTo(e)<.2).length;this.texts.push({el:i,pos:e.clone().add(new L(0,a*.28,0)),t:0,life:1.1})}update(e){let t=e*this.tw.speed;for(let e of this.particles)e.life-=t,e.vel.y-=e.gravity*t,e.mesh.position.addScaledVector(e.vel,t),e.mesh.scale.multiplyScalar(.985);let n=this.particles.filter(e=>e.life<=0);if(n.length){for(let e of n)this.group.remove(e.mesh);this.particles=this.particles.filter(e=>e.life>0)}for(let e of this.texts){e.t+=t;let n=e.t/e.life,r=e.pos.clone();r.y+=up.out(Math.min(1,n*1.5))*.5;let i=this.stage.project(r);e.el.style.transform=`translate(${i.x}px, ${i.y}px) translate(-50%, -50%) scale(${n<.1?.6+n*4:1})`,e.el.style.opacity=`${n>.7?1-(n-.7)/.3:1}`}let r=this.texts.filter(e=>e.t>=e.life);if(r.length){for(let e of r)e.el.remove();this.texts=this.texts.filter(e=>e.t<e.life)}}},J=Math.PI;function mp(e){let t=e*2654435761+1013904223>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function hp(e,t){return t[Math.floor(e()*t.length)%t.length]}var gp=new z;function _p(e,t,n){gp.setHex(e);let r={h:0,s:0,l:0};return gp.getHSL(r),r.h=(r.h+(t()-.5)*n*.12+1)%1,r.s=kn.clamp(r.s+(t()-.5)*n*.3,0,1),r.l=kn.clamp(r.l+(t()-.5)*n*.25,.03,.97),gp.setHSL(r.h,r.s,r.l),gp.getHex()}function vp(e,t){return gp.setHex(e).multiplyScalar(t),gp.getHex()}function yp(e,t){return gp.setHex(e).lerp(new z(16777215),t),gp.getHex()}var bp=new Map;function xp(e,t){let n=bp.get(e);return n||(n=t(),bp.set(e,n)),n}var Y=(e,t,n)=>xp(`box${e},${t},${n}`,()=>new za(e,t,n)),X=(e,t,n,r=8)=>xp(`cyl${e},${t},${n},${r}`,()=>new Va(e,t,n,r)),Sp=(e,t,n=8)=>xp(`cone${e},${t},${n}`,()=>new Ha(e,t,n)),Cp=(e,t,n,r,i,a)=>xp(`cylArc${e},${t},${n},${r},${i},${a}`,()=>new Va(e,t,n,r,1,!0,i,a)),wp=(e,t=8,n=6)=>xp(`sph${e},${t},${n}`,()=>new wo(e,t,n)),Tp=(e,t=8,n=4)=>xp(`dome${e},${t},${n}`,()=>new wo(e,t,n,0,J*2,0,J/2)),Ep=(e,t=0)=>xp(`ico${e},${t}`,()=>new yo(e,t)),Dp=e=>xp(`octa${e}`,()=>new xo(e)),Op=e=>xp(`dodeca${e}`,()=>new Wa(e)),kp=(e,t,n=6,r=12)=>xp(`torus${e},${t},${n},${r}`,()=>new Eo(e,t,n,r)),Ap=e=>xp(`tetra${e}`,()=>new To(e));function jp(e,t,n){return xp(`bow${e},${t},${n}`,()=>new Do(new po(new L(0,-e/2,0),new L(0,-e*.25,t*1.6),new L(0,e*.25,t*1.6),new L(0,e/2,0)),10,n,4,!1))}function Mp(e,t){return xp(`barrel${e},${t}`,()=>new bo([new I(e*.82,-t/2),new I(e*.97,-t/4),new I(e,0),new I(e*.97,t/4),new I(e*.82,t/2)],10))}var Np=(e,t=10)=>xp(`disc${e},${t}`,()=>new Ba(e,t));function Pp(e,t){let n=new Ro({color:e,flatShading:!0});return t?.emissive!==void 0&&(n.emissive.setHex(t.emissive),n.emissiveIntensity=t.intensity??1),n.userData.baseEmissive=n.emissive.clone(),n.userData.baseEmissiveIntensity=n.emissiveIntensity,n}var Fp=class{map=new Map;list=[];get(e,t){let n=`${e}|${t?.emissive??-1}|${t?.intensity??1}`,r=this.map.get(n);return r||(r=Pp(e,t),this.map.set(n,r),this.list.push(r)),r}},Ip=new Map;function Lp(e,t){let n=`${e}|${t?.emissive??-1}|${t?.intensity??1}`,r=Ip.get(n);return r||(r=Pp(e,t),Ip.set(n,r)),r}function Z(e,t,n,r=0,i=0,a=0){let o=new V(t,n);return o.position.set(r,i,a),o.castShadow=!0,e.add(o),o}function Rp(e,t,n=0,r=0){return e.rotation.set(t,n,r),e}var zp=[15978414,14987658,13340515,10776394,7622959,5650978],Bp=[2759698,5978656,10250798,14201706,3816004,11553334,15131882,7220554],Q={steel:9278368,steelDark:5593450,iron:7172736,gold:14069070,goldDark:11043118,leather:7293483,leatherDark:4861977,wood:8016432,woodDark:5059099,cloth:4014416,linen:15196109,white:15789283,black:1776418,fur:9071176,furDark:5980976,bone:15261896,rope:12887146,brass:12753482,string:14275780,glass:10475752};function Vp(e,t){let[n,r,i,a]={vanguard:[Q.cloth,3093312,Q.steel,16777215],berserker:[4864556,Q.furDark,Q.leather,16777215],lancer:[3818584,2765120,Q.steel,16777215],marksman:[4086842,2965291,6982218,16777215],trapper:[5917236,4010788,Q.leather,16777215],beastmaster:[7033398,4864036,Q.fur,16777215],pyromancer:[9317666,6102038,14709806,16747050],cryomancer:[13165808,9418960,15333115,10481919],stormcaller:[2894446,1841736,4933544,16769354],oracle:[15591384,14274488,Q.gold,16767354],templar:[15130575,Q.steel,Q.gold,16767354],hexer:[4138066,2758712,6044282,8257434],assassin:[2500144,1710626,3816008,16777215],duelist:[5909050,3808294,15260868,16777215],saboteur:[6117948,4144168,9071164,16777215],wolf:[6971992,4867132,12103844,16777215]}[e.subclassId];return{skin:hp(t,zp),hair:hp(t,Bp),hairStyle:Math.floor(t()*5),cloth:_p(n,t,.25),cloth2:_p(r,t,.2),accent:i,glow:a,team:e.teamColor}}var Hp=.27,Up=.27,Wp=.37,Gp=.32,Kp=.3,qp=-.28,Jp=.36,Yp=.32,Xp=.33,Zp=.02;function Qp(e){switch(e){case`heavy`:return[.32,.22];case`medium`:return[.28,.19];case`light`:return[.25,.18];case`robe`:return[.27,.19]}}function $p(e,t,n,r,i,a){let o=new Dr;o.position.set(t*.075,Hp,0);let s=e.mats.get(r),c=e.mats.get(i);if(n>.01){let e=Up/2,t=Z(o,Y(.11,.155,.12),s,0,0,0);t.rotation.x=n,t.position.set(0,-Math.cos(n)*e/2,Math.sin(n)*e/2);let r=-Math.cos(n)*e,i=Math.sin(n)*e,a=Z(o,Y(.1,.155,.11),c,0,0,0);a.rotation.x=-n,a.position.set(0,r-Math.cos(n)*e/2,i-Math.sin(n)*e/2),Z(o,Y(.12,.05,.17),c,0,-.27+.025,.03)}else Z(o,Y(.11,Up*.62,.12),s,0,-.27*.31,0),Z(o,Y(a?.125:.11,Up*.42,a?.135:.12),c,0,-.27*.79,0),Z(o,Y(a?.13:.12,.05,a?.18:.16),c,0,-.27+.025,.025);return o}function em(e,t,n){let r=new Dr;r.position.set(t*(e.torsoW/2+.045),Gp,0);let i=n.thick?.11:.09;if(n.wideSleeve){let t=Z(r,X(.05,.085,Kp*.8,6),e.mats.get(n.sleeve),0,-.12,0);t.rotation.y=J/6,Z(r,Y(.07,.08,.07),e.mats.get(n.hand),0,-.30000000000000004,0)}else n.bare?(Z(r,Y(i,Kp*.62,i),e.mats.get(n.skin),0,-.093,0),Z(r,Y(i-.015,Kp*.4,i-.015),e.mats.get(n.skin),0,-.24,0),Z(r,Y(.08,.08,.08),e.mats.get(n.hand),0,qp,0)):(Z(r,Y(i,Kp*.6,i),e.mats.get(n.sleeve),0,-.09,0),Z(r,Y(i-.01,Kp*.42,i-.01),e.mats.get(n.hand===n.skin?n.sleeve:n.hand),0,-.3*.78,0),Z(r,Y(.08,.08,.08),e.mats.get(n.hand),0,qp,0));return r}function tm(e,t,n=1710626,r=!1){let i=e.mats.get(e.st.skin);Z(t,Y(Jp,Yp,Xp),i,0,.18,0),Z(t,Y(.1,.06,.1),i,0,.01,0);let a=e.mats.get(n),o=.18+(r?.03:0);Z(t,Y(.045,.06,.012),a,-.065,o,.167),Z(t,Y(.045,.06,.012),a,.065,o,.167)}function nm(e,t,n,r){let i=e.mats.get(e.st.hair);switch(r||(Z(t,Y(.38,.07,.35000000000000003),i,0,.36000000000000004,0),Z(t,Y(.38,.06,.04),i,0,.30000000000000004,.165)),n){case 1:Z(t,Y(.38,.24,.07),i,0,.23000000000000004,-.33/2-.02),Z(t,Y(.05,.18,Xp*.8),i,-.19,.25,-.02),Z(t,Y(.05,.18,Xp*.8),i,.19,.25,-.02);break;case 2:r||(Rp(Z(t,Sp(.05,.13,4),i,0,.44000000000000006,-.02),-.3),Rp(Z(t,Sp(.045,.12,4),i,-.1,.42000000000000004,-.04),-.2,0,.5),Rp(Z(t,Sp(.045,.12,4),i,.1,.42000000000000004,-.04),-.2,0,-.5));break;case 3:Rp(Z(t,Y(.07,.22,.07),i,0,.26,-.33/2-.05),.35);break;case 4:Z(t,Y(.05,.14,Xp*.9),i,.19,.26,-.01);break;default:Z(t,Y(.38,.1,.05),i,0,.30000000000000004,-.33/2-.01)}}function rm(e,t,n,r){let i=e.mats.get(n),a=.41,o=.38;return Z(t,Y(a,.38,o),i,0,.19,0),Z(t,Y(a*.7,.045,.02),e.mats.get(1052694),0,.22,.195),Z(t,Y(a*.8,.03,.03),e.mats.get(r),0,.265,.195),Z(t,Y(.05,.05,o*.8),e.mats.get(r),0,.4,-.01),.425}function im(e,t,n,r){let i=e.mats.get(n);Z(t,Tp(.21,8,4),i,0,.26,0),Z(t,Y(.42,.07,.39),i,0,.25,0),Z(t,Y(.04,.12,.02),i,0,.17,.195);let a=e.mats.get(r);for(let e of[-1,1]){let n=Z(t,X(.05,.06,.1,5),a,e*.24,.27,0);n.rotation.z=e*1.25;let r=Z(t,Sp(.05,.26,5),a,e*.33999999999999997,.36000000000000004,0);r.rotation.z=e*.75}return .5}function am(e,t,n,r){let i=e.mats.get(n);Z(t,Y(.41,Yp*.75,.38),i,0,.24000000000000002,0),Z(t,Y(.05,.14,.04),i,-.19,.1,Xp/2-.02),Z(t,Y(.05,.14,.04),i,.19,.1,Xp/2-.02);let a=e.mats.get(r),o=Z(t,X(.04,.05,.08,6),e.mats.get(Q.gold),0,.39,0);o.rotation.y=J/6;let s=Z(t,X(.035,.05,.18,6),a,0,.51,-.03);s.rotation.x=.25;let c=Z(t,X(.02,.04,.17,6),a,0,.65,-.1);return c.rotation.x=.7,.72}function om(e,t,n,r){let i=e.mats.get(n);Z(t,Y(.41,.37,.38),i,0,.195,0);let a=e.mats.get(1052694);return Z(t,Y(.41*.72,.04,.02),a,0,.18+.05,.195),Z(t,Y(.035,.11,.02),a,0,.16,.195),Z(t,Y(.04,.12,Xp*.85),e.mats.get(r),0,.41000000000000003,-.02),.48000000000000004}function sm(e,t,n,r,i,a=n){let o=e.mats.get(n),s=Zp+Yp*(r?.45:.6),c=Yp*(r?.85:.75)+.06,l=Z(t,Sp(.31079999999999997,c,4),o,0,s+c/2-.01,-.03);return l.rotation.y=J/4,l.rotation.x=-.12,Z(t,X(Jp*.55,Jp*.8,.12,8),e.mats.get(a),0,.03,-.01),r&&Z(t,Y(.362,Yp*.42,.012),e.mats.get(1381660),0,.21839999999999998,.169),i!==void 0&&Z(t,Y(.38,.05,.03),e.mats.get(i),0,s+.01,.18),s+c-.02}function cm(e,t,n,r,i,a=0){let o=e.mats.get(n),s=new Dr;s.position.set(0,.34500000000000003,0),s.rotation.x=a,t.add(s),Z(s,X(.31,.33,.025,10),o,0,0,0),Z(s,X(.17,.19,.05,10),e.mats.get(r),0,.035,0);let c=.06;if(i===`cone`){let e=Z(s,Sp(.17,.42,8),o,0,.25,-.02);e.rotation.x=-.18,c=.47}else Z(s,X(.15,.17,.14,10),o,0,.12,0),c=.19;return .34+c}function lm(e,t,n,r){let i=e.mats.get(n,{emissive:r,intensity:.35}),a=Z(t,kp(.19,.018,5,10),e.mats.get(n),0,.32,0);a.rotation.x=J/2;for(let[e,n,r,a]of[[0,.26,0,0],[-.1,.19,-.03,.3],[.1,.19,-.03,-.3],[-.05,.15,-.12,.2],[.05,.15,-.12,-.2]]){let o=Z(t,Dp(.045),i,e,.34+n*.45,r);o.scale.set(1,n/.09,1),o.rotation.z=a,o.rotation.x=r<-.05?-.25:0}return .64}function um(e,t,n,r){let i=e.mats.get(n),a=Z(t,Cp(Jp*.78,Jp*.66,.26,8,J*.2,J*1.6),i,0,.1,-.02);return a.rotation.y=J,Z(t,Tp(Jp*.6,8,4),i,0,.28,-.04),Z(t,Y(.41,.09,.36),i,0,.26,-.03),Z(t,Y(.362,.05,.012),e.mats.get(r),0,.2,.169),.44000000000000006}function dm(e,t,n,r,i){let a=e.mats.get(n),o=new Dr;o.position.set(0,.36000000000000004,0),o.rotation.z=-.12,o.rotation.x=-.08,t.add(o),Z(o,X(.17,.2,.11,10),a,0,.04,0),Z(o,X(.2,.21,.02,10),e.mats.get(r),0,.005,0);let s=Z(o,Y(.1,.02,.26),a,.19,0,0);s.rotation.z=.5;let c=Z(o,X(.012,.035,.3,4),e.mats.get(i),-.13,.17,-.1);return c.rotation.z=.55,c.rotation.x=.5,.64}function fm(e,t,n,r=!1){let i=e.mats.get(2761504),a=e.mats.get(7321545,{emissive:2776684,intensity:.5}),o=e.mats.get(Q.brass),s=Xp/2+(r?.06:.02);Z(t,Y(.39,.04,.36),i,0,n,0);for(let e of[-.07,.07]){let r=Z(t,X(.045,.045,.03,8),o,e,n,s);r.rotation.x=J/2;let i=Z(t,X(.032,.032,.035,8),a,e,n,s+.002);i.rotation.x=J/2}}function pm(e,t,n){let r=Z(t,kp(.185,.012,5,12),e.mats.get(n),0,.276,0);r.rotation.x=J/2,Z(t,Dp(.025),e.mats.get(n,{emissive:n,intensity:.3}),0,.276,.17500000000000002)}function mm(e,t,n,r){let i=e.mats.get(n);Z(t,Y(.42,.12,.39),i,0,.30000000000000004,-.01),Z(t,Y(.42,.2,.08),i,0,.17,-.33/2-.03),Z(t,Y(.14,.07,.1),i,0,.335,.185),Z(t,Y(.05,.03,.03),e.mats.get(1709330),0,.325,.23500000000000001);let a=e.mats.get(r);return Rp(Z(t,Sp(.045,.1,4),a,-.11,.42000000000000004,-.03),0,J/4,.3),Rp(Z(t,Sp(.045,.1,4),a,.11,.42000000000000004,-.03),0,J/4,-.3),.47000000000000003}function hm(e,t,n){Z(t,Y(.38,Yp*.38,.35000000000000003),e.mats.get(n),0,.0872,0)}function gm(e,t,n,r){let i=e.mats.get(n);for(let n of[-1,1])Z(t,wp(r,8,5),i,n*(e.torsoW/2+.045),.34,0).scale.set(1,.75,1)}function _m(e,t,n,r){Z(t,wp(.085,8,5),e.mats.get(n),r*(e.torsoW/2+.045),.34,0).scale.set(1,.75,1)}function vm(e,t,n,r=.16){let i=e.mats.get(n),a=e.torsoW/2,o=Z(t,X(a+.02,a+.13,r,8),i,0,.36-r/2,0);o.rotation.y=J/8}function ym(e,t,n,r,i=.3){let a=e.mats.get(n),o=-(e.torsoD/2+.03),s=Z(t,Y(i,r,.035),a,0,.34-r/2,o-.02);s.rotation.x=.08,Z(t,Y(i+.02,.05,.05),a,0,.35,o+.01)}function bm(e,t,n,r){let i=e.mats.get(n),a=r*(e.torsoW/4+.02),o=Z(t,Y(.19,.36,.035),i,a,.18,-(e.torsoD/2+.03));o.rotation.z=r*-.12,o.rotation.x=-.1,Z(t,Y(.2,.06,.12),i,a,.35,-(e.torsoD/2)+.02),Z(t,wp(.03,6,4),e.mats.get(Q.gold),a,.36,e.torsoD/2-.01)}function xm(e,t,n,r){let i=e.mats.get(n),a=e.torsoD/2+.012;if(Z(t,Y(.16,.42,.02),i,0,.12,a),Z(t,Y(.16,.36,.02),i,0,.14,-a),r!==void 0){let n=e.mats.get(r,{emissive:r,intensity:.15}),i=Z(t,X(.055,.055,.012,8),n,0,.24,a+.014);i.rotation.x=J/2;for(let e=0;e<4;e++){let r=Z(t,Y(.02,.17,.01),n,0,.24,a+.012);r.rotation.z=e*J/4}}}function Sm(e,t,n){let r=e.mats.get(n),i=Z(t,Y(.07,.42,e.torsoD+.03),r,0,.2,0);i.rotation.z=.6,i.scale.z=1}function Cm(e,t,n){let r=e.mats.get(n),i=e.torsoD/2+.02;for(let e of[-.09,-.03,.03,.09])Z(t,Y(.05,.06,.04),r,e,.03,i);Z(t,Y(.05,.06,.04),r,e.torsoW/2+.01,.03,.02)}function wm(e,t,n){let r=Z(t,kp(.06,.02,5,10),e.mats.get(Q.rope),n*(e.torsoW/2+.03),0,-.02);r.rotation.y=J/2}function Tm(e,t,n,r){let i=new Dr;i.position.set(r*.1,.16,-(e.torsoD/2+.05)),i.rotation.z=r*.35,t.add(i),Z(i,X(.045,.04,.34,7),e.mats.get(n),0,0,0),Z(i,X(.05,.05,.03,7),e.mats.get(vp(n,.7)),0,.16,0);let a=e.mats.get(Q.wood),o=e.mats.get(e.st.team);for(let[e,t]of[[-.015,.01],[.02,-.01],[0,.02]])Z(i,X(.006,.006,.18,4),a,e,.22,t),Z(i,Y(.02,.05,.012),o,e,.3,t)}function Em(e,t){let n=Z(t,Y(.06,.5,e.torsoD+.03),e.mats.get(Q.leatherDark),0,.2,0);n.rotation.z=-.55;let r=e.mats.get(2829107),i=e.mats.get(Q.rope),a=e.torsoD/2+.03;for(let e=0;e<3;e++){let n=-.08+e*.08,o=n*1.5,s=.22-n*1;Z(t,wp(.035,6,5),r,o,s,a),Z(t,Y(.01,.03,.01),i,o,s+.045,a)}}function Dm(e,t,n){let r=e.mats.get(Q.leather);Z(t,Y(.1,.11,.07),r,n*(e.torsoW/2+.05),-.02,-.02),Z(t,Y(.11,.04,.08),e.mats.get(Q.leatherDark),n*(e.torsoW/2+.05),.04,-.02)}function Om(e,t){let n=e.mats.get(Q.fur),r=e.torsoW/2+.08,i=Z(t,X(r-.02,r+.03,.12,8),n,0,.33,0);i.rotation.y=J/8;let a=e.mats.get(Q.furDark);for(let e=0;e<6;e++){let n=e/6*J*2+.3,i=Z(t,Sp(.035,.08,4),a,Math.cos(n)*(r+.01),.25,Math.sin(n)*(r+.01));i.rotation.x=J}}function km(e,t){let n=e.mats.get(Q.bone),r=e.torsoD/2+.015;for(let e=-2;e<=2;e++){let i=Z(t,Sp(.012,.05,4),n,e*.035,.24-Math.abs(e)*-.012-.02,r);i.rotation.x=J}Z(t,Y(.16,.012,.012),e.mats.get(Q.leatherDark),0,.29000000000000004,r)}function Am(e,t,n){let r=e.mats.get(n,{emissive:n,intensity:.5}),i=e.torsoD/2+.014;Rp(Z(t,Y(.025,.09,.01),r,.015,.27,i),0,0,.5),Rp(Z(t,Y(.025,.09,.01),r,-.015,.2,i),0,0,.5),Rp(Z(t,Y(.025,.07,.01),r,.012,.14,i),0,0,.5)}function jm(e,t,n){let r=e.mats.get(n,{emissive:n,intensity:.8}),i=Z(t,kp(.2,.016,6,16),r,0,.228,-.33/2-.06);i.rotation.x=-.15}function Mm(e,t,n,r,i,a){let o=new Dr;o.position.set(n,r,i),o.name=`charm`,t.add(o),Z(o,wp(.045,7,5),e.mats.get(Q.bone),0,0,0),Z(o,Y(.06,.03,.04),e.mats.get(Q.bone),0,-.04,.01);let s=e.mats.get(a,{emissive:a,intensity:1});Z(o,Y(.016,.016,.01),s,-.016,.005,.042),Z(o,Y(.016,.016,.01),s,.016,.005,.042)}function Nm(e,t,n,r,i){let a=e.mats.get(n),o=.25-(i?.08:0),s=Z(t,X(e.torsoW/2+.01,r,o,8),a,0,-o/2+.02,0);if(s.rotation.y=J/8,i){let i=e.mats.get(vp(n,.8));for(let e=0;e<8;e++){let n=(e+.5)/8*J*2+J/8,a=.08+e*7%3*.03,s=Z(t,Y(.07,a,.025),i,Math.cos(n)*(r-.01),-o+.02-a/2+.01,Math.sin(n)*(r-.01));s.rotation.y=-n+J/2}}}function Pm(e,t,n,r){let i=new Dr;i.position.set(.08,-.17,.08),i.rotation.y=.35,t.add(i),Z(i,Y(.32,.5,.035),e.mats.get(r),0,0,0),Z(i,Y(.26,.44,.012),e.mats.get(n),0,0,.022);let a=Z(i,Sp(.23,.12,4),e.mats.get(r),0,-.31,0);a.rotation.x=J,a.rotation.y=J/4,a.scale.z=.12,Z(i,wp(.04,6,4),e.mats.get(r),0,.05,.03)}var Fm={sword:{rx:.5,rz:0,x:0,y:0,z:.03},axe:{rx:.5,rz:0,x:0,y:0,z:.03},mace:{rx:.5,rz:0,x:0,y:0,z:.03},dagger:{rx:.7,rz:0,x:0,y:0,z:.03},rapier:{rx:.45,rz:0,x:0,y:0,z:.03},rod:{rx:.4,rz:0,x:0,y:0,z:.03},spear:{rx:.05,rz:.03,x:-.055,y:0,z:.02},staff:{rx:.05,rz:.03,x:-.055,y:0,z:.02},bow:{rx:0,rz:0,x:.065,y:0,z:.05},crossbow:{rx:1.15,rz:0,x:0,y:.02,z:.04},fang:{rx:0,rz:0,x:0,y:0,z:0}};function Im(e,t,n,r){let i=new Dr;i.name=`weapon:${e}`;let a=t.get(Q.steel),o=t.get(Q.steelDark),s=t.get(Q.wood),c=t.get(Q.gold),l=t.get(Q.leatherDark);switch(e){case`sword`:{Z(i,X(.018,.018,.12,6),l,0,0,0),Z(i,wp(.025,6,4),c,0,-.065,0),Z(i,Y(.15,.03,.035),c,0,.07,0),Z(i,Y(.05,.42,.014),a,0,.3,0);let e=Z(i,Sp(.035,.09,4),a,0,.555,0);e.rotation.y=J/4,e.scale.z=.28;break}case`axe`:{Z(i,X(.02,.022,.62,6),s,0,.17,0),Z(i,X(.022,.022,.1,6),l,0,-.08,0),Z(i,Y(.035,.1,.07),o,0,.4,0),Z(i,Y(.02,.2,.12),a,0,.38,.1),Z(i,Y(.02,.1,.06),a,0,.3,.07);let e=Z(i,Sp(.025,.09,4),a,0,.41,-.07);e.rotation.x=-J/2;break}case`mace`:Z(i,X(.018,.02,.44,6),o,0,.14,0),Z(i,X(.022,.022,.1,6),l,0,-.05,0),Z(i,X(.045,.045,.13,6),a,0,.42,0);for(let e=0;e<6;e++){let t=e/6*J*2,n=Z(i,Y(.02,.13,.05),a,Math.cos(t)*.055,.42,Math.sin(t)*.055);n.rotation.y=-t+J/2}Z(i,Sp(.03,.06,6),a,0,.515,0);break;case`dagger`:{Z(i,X(.015,.015,.09,6),l,0,0,0),Z(i,wp(.02,6,4),c,0,-.05,0),Z(i,Y(.09,.02,.025),c,0,.05,0),Z(i,Y(.035,.18,.01),a,0,.15,0);let e=Z(i,Sp(.025,.06,4),a,0,.27,0);e.rotation.y=J/4,e.scale.z=.3;break}case`rapier`:{Z(i,X(.013,.013,.11,6),l,0,-.01,0),Z(i,wp(.02,6,4),c,0,-.07,0);let e=Z(i,Tp(.06,8,4),c,0,.05,0);e.rotation.x=J,Z(i,Y(.02,.56,.008),a,0,.33,0);let t=Z(i,Sp(.012,.05,4),a,0,.635,0);t.rotation.y=J/4;break}case`rod`:Z(i,X(.014,.018,.36,6),o,0,.07,0),Z(i,kp(.05,.012,5,10),c,0,.27,0),Z(i,wp(.05,8,6),t.get(r,{emissive:r,intensity:.9}),0,.27,0),Z(i,wp(.022,6,4),c,0,-.12,0);break;case`spear`:{Z(i,X(.016,.018,1.2,6),s,0,.3,0),Z(i,X(.02,.02,.06,6),a,0,.92,0);let e=Z(i,Sp(.045,.22,4),a,0,1.06,0);e.rotation.y=J/4,e.scale.z=.35;let r=Z(i,Sp(.035,.09,5),t.get(n),0,.86,0);r.rotation.x=J,Z(i,X(.02,.02,.05,6),a,0,-.28,0);break}case`staff`:Z(i,X(.02,.024,1.3,6),s,0,.35,0),Z(i,X(.028,.028,.05,6),c,0,.85,0),Rp(Z(i,Y(.02,.1,.02),s,-.04,.95,0),0,0,.5),Rp(Z(i,Y(.02,.1,.02),s,.04,.95,0),0,0,-.5),Z(i,Dp(.07),t.get(r,{emissive:r,intensity:1}),0,1.06,0).scale.set(1,1.35,1),Z(i,X(.024,.02,.05,6),a,0,-.29,0);break;case`bow`:Z(i,jp(1,.14,.024),t.get(Q.woodDark),0,0,0),Z(i,X(.032,.032,.16,6),l,0,0,.02),Z(i,X(.008,.008,1,3),t.get(Q.string),0,0,-.01),Z(i,Y(.04,.05,.04),c,0,.5,0),Z(i,Y(.04,.05,.04),c,0,-.5,0);break;case`crossbow`:{Z(i,Y(.05,.46,.06),s,0,.1,0),Z(i,Y(.04,.09,.07),l,0,-.08,-.03),Z(i,Y(.4,.03,.025),o,0,.26,.02);let e=t.get(Q.string);for(let t of[-1,1]){let n=Z(i,X(.005,.005,Math.hypot(.19,.12),3),e,t*.095,.2,.025);n.rotation.z=t*Math.atan2(.19,.12)}Z(i,Y(.03,.04,.03),a,0,.14,.03),Z(i,X(.006,.006,.3,4),e,0,.2,.045);break}}return i}function Lm(e){let{armor:t}=e.spec,n=e.st;switch(t){case`heavy`:return{lean:0,legBend:0,chest:Q.steel,pants:n.cloth2,boots:Q.steelDark,sleeve:Q.steel,glove:Q.steelDark,pauldrons:`heavy`,bootHeavy:!0};case`medium`:return{lean:0,legBend:0,chest:Q.leather,pants:n.cloth2,boots:Q.leatherDark,sleeve:n.cloth,glove:Q.leatherDark,pauldrons:`light`,bootHeavy:!1};case`light`:return{lean:0,legBend:0,chest:n.cloth,pants:n.cloth2,boots:Q.leatherDark,sleeve:n.cloth,glove:n.skin,pauldrons:`none`,bootHeavy:!1};case`robe`:return{lean:0,legBend:0,chest:n.cloth,pants:n.cloth2,boots:Q.leatherDark,sleeve:n.cloth,glove:n.skin,pauldrons:`none`,bootHeavy:!1}}}function Rm(e){if(e.classId===`beast`||e.subclassId===`wolf`)return zm(e);let t=mp(e.seed??1),n=new Fp,r=Vp(e,t),[i,a]=Qp(e.armor),o={spec:e,st:r,mats:n,rnd:t,torsoW:i,torsoD:a},s=Lm(o),c=e.subclassId;c===`berserker`&&(s.bareArms=!0,s.thickArms=!0,s.lean=.18,s.chest=Q.leather,s.pauldrons=`none`),c===`lancer`&&(s.pauldrons=`light`),c===`marksman`&&(s.pauldrons=`right`),c===`oracle`&&(s.wideSleeves=!0,s.chest=r.cloth),c===`templar`&&(s.chest=Q.steel,s.sleeve=r.cloth,s.glove=Q.steelDark),c===`cryomancer`&&(s.pauldrons=`ice`),c===`assassin`&&(s.lean=.22,s.legBend=.45,s.glove=r.cloth2),c===`saboteur`&&(s.lean=.1,s.legBend=.2,s.glove=Q.leatherDark),c===`duelist`&&(s.lean=-.03,s.chest=r.accent,s.sleeve=r.accent,s.glove=Q.white),c===`hexer`&&(s.glove=r.cloth2),c===`pyromancer`&&(s.glove=r.cloth2),c===`stormcaller`&&(s.glove=r.cloth2);let l=new Dr;l.name=`unit:${c}`;let u=new Dr;u.name=`body`,u.position.y=Hp,l.add(u);let d=new Dr;d.name=`frame`,d.rotation.x=s.lean,u.add(d);let f=$p(o,1,s.legBend,s.pants,s.boots,s.bootHeavy),p=$p(o,-1,s.legBend,s.pants,s.boots,s.bootHeavy);f.name=`legL`,p.name=`legR`,l.add(f,p),s.legBend>.01&&(u.position.y=Hp-(Up-Math.cos(s.legBend)*Up)*0-.02);let m=n.get(s.chest);Z(d,Y(i,.34,a),m,0,.22,0),Z(d,Y(i+.02,.05,a+.02),n.get(e.armor===`heavy`?Q.steelDark:Q.leatherDark),0,.04,0),Z(d,Y(i-.04,.09,a-.02),n.get(s.pants),0,-.02,0),e.armor===`heavy`?Z(d,Y(i*.5,.26,.02),n.get(Q.steelDark),0,.22,a/2+.005):e.armor===`medium`&&Z(d,Y(i*.55,.3,.015),n.get(Q.leatherDark),0,.22,a/2+.005);let h=new Dr;h.name=`head`,h.position.y=Wp,d.add(h);let g=c===`assassin`||c===`hexer`;tm(o,h,c===`hexer`?r.glow:1710626,g);let _={sleeve:s.sleeve,hand:s.glove,skin:r.skin,bare:s.bareArms,thick:s.thickArms,wideSleeve:s.wideSleeves},v=em(o,1,_),y=em(o,-1,_);switch(v.name=`armL`,y.name=`armR`,d.add(v,y),s.pauldrons){case`heavy`:gm(o,d,Q.steel,.095);break;case`light`:gm(o,d,e.armor===`heavy`?Q.steel:Q.leather,.075);break;case`right`:_m(o,d,Q.leather,-1);break;case`left`:_m(o,d,Q.leather,1);break;case`ice`:{let e=n.get(r.accent,{emissive:r.glow,intensity:.25});for(let t of[-1,1]){let n=t*(i/2+.05);Rp(Z(d,Sp(.05,.16,4),e,n,.4,0),0,J/4,t*-.5),Rp(Z(d,Sp(.035,.11,4),e,n+t*.03,.36,-.03),0,J/4,t*-.9)}break}}if(e.armor===`robe`){let t=e.classId===`mage`?.3:.26;if(Nm(o,u,r.cloth,t,c===`hexer`),e.classId===`cleric`||e.classId===`mage`){let e=Z(u,X(t+.005,t+.01,.035,8),n.get(c===`hexer`?r.cloth2:r.accent),0,.035,0);e.rotation.y=J/8}}let b=.34+.07,x=r.team;switch(c){case`vanguard`:b=rm(o,h,Q.steel,x),xm(o,d,x),Pm(o,v,x,Q.steelDark);break;case`berserker`:Om(o,d),b=im(o,h,Q.iron,Q.bone),nm(o,h,1,!0),Z(d,Y(i-.02,.16,.025),n.get(x),0,-.07,a/2+.01),Z(d,Y(i-.02,.14,.025),n.get(x),0,-.06,-a/2-.01);for(let e of[v,y])Z(e,Y(.125,.05,.125),n.get(x),0,-.1,0);break;case`lancer`:b=am(o,h,Q.steel,x),xm(o,d,x);break;case`marksman`:ym(o,d,x,.56,.34),Tm(o,d,Q.leather,1),b=sm(o,h,x,!0);break;case`trapper`:Tm(o,d,Q.leatherDark,1),Cm(o,d,Q.leatherDark),wm(o,d,-1),Z(d,Y(i-.02,.07,a+.03),n.get(x),0,.3,.01),nm(o,h,r.hairStyle===2?0:r.hairStyle,!0),b=cm(o,h,Q.leatherDark,x,`flat`,.05),fm(o,h,.405,!0);break;case`beastmaster`:Tm(o,d,Q.leather,-1),km(o,d),xm(o,d,x),b=mm(o,h,9406328,5129790),Z(d,Y(i-.02,.3,.05),n.get(9406328),0,.2,-(a/2+.02));break;case`pyromancer`:{vm(o,d,x,.15),nm(o,h,r.hairStyle,!0),b=cm(o,h,r.cloth,x,`cone`,-.05);let e=n.get(16757575,{emissive:16742938,intensity:1});Z(h,Sp(.035,.1,5),e,.1,.34+.09,.14),Z(v,wp(.045,8,6),n.get(16763242,{emissive:16742938,intensity:1}),0,-.30000000000000004,.06);break}case`cryomancer`:vm(o,d,x,.14),nm(o,h,r.hairStyle,!0),b=lm(o,h,r.accent,r.glow),Z(v,Dp(.04),n.get(r.accent,{emissive:r.glow,intensity:.8}),0,-.33,.03);break;case`stormcaller`:{vm(o,d,x,.14),Am(o,d,r.glow),b=um(o,h,r.cloth2,855072);let e=Z(v,Ep(.04,0),n.get(16774056,{emissive:r.glow,intensity:1.2}),.03,-.38,.08);e.name=`spark`;break}case`oracle`:{nm(o,h,r.hairStyle,!1),pm(o,h,Q.gold),jm(o,h,r.glow);let e=n.get(x);Z(d,Y(.07,.42,.02),e,-.07,.14,a/2+.014),Z(d,Y(.07,.42,.02),e,.07,.14,a/2+.014),Z(d,Y(.22,.06,a+.04),e,0,.33,0),Z(d,Y(i+.03,.03,a+.03),n.get(Q.gold),0,.06,0);break}case`templar`:b=om(o,h,Q.steel,x),xm(o,d,x,Q.gold);break;case`hexer`:nm(o,h,1,!1),hm(o,h,1709088),b=sm(o,h,r.cloth2,!1,x,x),Sm(o,d,x),Mm(o,d,i/2+.16,.44,.05,r.glow);break;case`assassin`:{hm(o,h,x),b=sm(o,h,r.cloth,!1);let e=n.get(x);Rp(Z(d,Y(.07,.3,.025),e,.05,.22,-(a/2+.03)),-.2,0,.2),Rp(Z(d,Y(.07,.24,.025),e,-.04,.25,-(a/2+.035)),-.25,0,-.15);for(let e of[v,y])Z(e,Y(.1,.05,.1),n.get(Q.leatherDark),0,-.2,0);let t=Im(`dagger`,n,x,r.glow);t.position.set(0,qp,.03),t.rotation.x=.7,v.add(t);break}case`duelist`:nm(o,h,r.hairStyle,!0),b=dm(o,h,r.cloth,x,Q.white),bm(o,d,x,1),Z(d,Y(i+.02,.035,a+.02),n.get(Q.leatherDark),0,.08,0);for(let e of[.16,.24,.32])Z(d,wp(.012,5,4),n.get(Q.gold),0,e,a/2+.01);break;case`saboteur`:nm(o,h,r.hairStyle,!1),fm(o,h,.2824),Em(o,d),Dm(o,d,1),Z(d,Y(i-.02,.06,a+.03),n.get(x),0,.3,0),Z(y,Y(.1,.07,.1),n.get(x),0,-.05,0),b=.34+.07;break;default:nm(o,h,r.hairStyle,!1)}let S=Im(e.weapon,n,x,r.glow),C=Fm[e.weapon],w=e.weapon===`bow`?v:y;S.position.set(C.x*(e.weapon,1),qp+C.y,C.z),S.rotation.set(C.rx,0,C.rz),w.add(S);let T={root:l,body:u,head:h,armL:v,armR:y,legL:f,legR:p,weapon:S,height:.64+b,materials:n.list};return l.userData.rig=T,T}function zm(e){let t=mp(e.seed??1),n=new Fp,r=_p(hp(t,[7103836,9077112,5130822,10129280,5918016]),t,.2),i=n.get(r),a=n.get(yp(r,.35)),o=n.get(vp(r,.6)),s=n.get(e.teamColor),c=.22,l=new Dr;l.name=`unit:wolf`;let u=new Dr;u.name=`body`,u.position.y=c,l.add(u),Z(u,Y(.26,.24,.46),i,0,.12,0),Z(u,Y(.3,.27,.22),i,0,.135,.14),Z(u,Y(.2,.1,.4),a,0,.04,.02),Z(u,Y(.32,.03,.26),s,0,.26,-.03),Z(u,Y(.34,.14,.03),s,0,.19,-.16);let d=new Dr;d.name=`tail`,d.position.set(0,.18,-.23),d.rotation.x=-.9,u.add(d),Z(d,Y(.06,.26,.06),i,0,.12,0),Z(d,Y(.08,.1,.08),a,0,.27,0);let f=new Dr;f.name=`head`,f.position.set(0,.22,.26),u.add(f),Z(f,Y(.22,.2,.2),i,0,.06,.06),Z(f,Y(.13,.11,.16),a,0,.02,.22),Z(f,Y(.06,.04,.04),n.get(1709330),0,.055,.3);let p=n.get(16765770,{emissive:16756778,intensity:.6});Z(f,Y(.03,.03,.02),p,-.07,.1,.16),Z(f,Y(.03,.03,.02),p,.07,.1,.16),Rp(Z(f,Sp(.04,.11,4),o,-.08,.2,0),0,J/4,.25),Rp(Z(f,Sp(.04,.11,4),o,.08,.2,0),0,J/4,-.25);let m=Z(f,kp(.13,.025,5,10),s,0,.02,-.02);m.rotation.x=J/2,Z(f,wp(.03,6,4),n.get(Q.gold),0,-.07,.05);let h=new Dr;h.name=`jaw`,h.position.set(0,-.03,.3),f.add(h);let g=(e,t,n,r)=>{let a=new Dr;return a.name=n,a.position.set(e,c,t),l.add(a),Z(a,Y(.09,c*.6,r?.12:.1),i,0,-.066,r?-.01:0),Z(a,Y(.08,c*.45,.08),o,0,-.1716,0),Z(a,Y(.09,.04,.11),o,0,-.2,.015),a},_={root:l,body:u,head:f,armL:g(.1,.16,`armL`,!1),armR:g(-.1,.16,`armR`,!1),legL:g(.09,-.15,`legL`,!0),legR:g(-.09,-.15,`legR`,!0),weapon:h,height:.7,materials:n.list};return l.userData.rig=_,_}var Bm=new z;function Vm(e,t,n){Bm.setHex(t);for(let t of e.materials){if(!(t instanceof Ro))continue;let e=t.userData.baseEmissive,r=t.userData.baseEmissiveIntensity??1;n<=0?(e&&t.emissive.copy(e),t.emissiveIntensity=r):(e?t.emissive.copy(e).multiplyScalar(r).lerp(Bm,n):t.emissive.copy(Bm).multiplyScalar(n),t.emissiveIntensity=1)}}function Hm(e,t){let n=kn.clamp(t,0,1);for(let t of e.materials){let e=n<1;t.transparent!==e&&(t.transparent=e,t.needsUpdate=!0),t.opacity=n,t.depthWrite=!0}}function Um(e){e.root.removeFromParent();for(let t of e.materials)t.dispose();e.materials.length=0,e.root.userData.rig=void 0}function $(e,t,n,r=0,i=0,a=0){let o=Z(e,t,n,r,i,a);return o.receiveShadow=!0,o}function Wm(e,t,n=3898840){let r=mp(t+17),i=new Dr;i.name=`prop:${e}`;let a=(e,t=.25)=>Lp(_p(e,r,t)),o=r()*J*2;switch(e){case`tree`:{let e=.85+r()*.3,t=a(7031340,.2);$(i,X(.07,.1,.7*e,6),t,0,.35*e,0);let n=a(5212730,.35),s=Lp(vp(_p(5212730,r,.3),.85));$(i,Ep(.36*e,1),n,0,.95*e,0),$(i,Ep(.3*e,1),s,.18*e,1.2*e,.1*e),$(i,Ep(.28*e,1),n,-.17*e,1.25*e,-.08*e),$(i,Ep(.24*e,1),s,.02*e,1.5*e,-.02*e),i.rotation.y=o;break}case`pine`:case`snowpine`:{let t=.85+r()*.3;$(i,X(.06,.09,.6*t,6),a(5913890,.2),0,.3*t,0);let n=a(e===`snowpine`?3828554:3107642,.3),s=Lp(15922938);for(let[a,o,c]of[[.42,.7,.75],[.33,.6,1.2],[.22,.55,1.6]]){let l=$(i,Sp(a*t,o*t,7),n,0,c*t,0);if(l.rotation.y=r()*.5,e===`snowpine`){let e=$(i,Sp(a*t*.62,o*t*.55,7),s,0,(c+o*.26)*t,0);e.rotation.y=l.rotation.y}}i.rotation.y=o;break}case`bush`:{let e=a(4882230,.35),t=a(3959340,.3);$(i,Ep(.22,1),e,0,.2,0),$(i,Ep(.17,1),t,.17,.15,.08),$(i,Ep(.15,1),t,-.16,.14,-.06),$(i,Ep(.13,1),e,.02,.16,-.17),i.rotation.y=o;break}case`rock`:{let e=a(8158594,.15),t=$(i,Op(.2),e,0,.14,0);t.scale.set(1.3,.75,1.1),t.rotation.set(r()*.4,o,r()*.3),$(i,Op(.1),e,.22,.07,-.1).scale.set(1.1,.7,1);break}case`boulder`:{let e=a(7632252,.15),t=$(i,Op(.4),e,0,.36,0);t.scale.set(1,.9,.95),t.rotation.set(r()*.3,o,r()*.3),$(i,Op(.16),Lp(vp(_p(7632252,r,.1),.85)),.3,.12,.2).scale.set(1.2,.8,1);break}case`pillar`:{let e=a(13221284,.12),t=Lp(vp(13221284,.85));$(i,Y(.5,.12,.5),t,0,.06,0),$(i,X(.17,.17,.06,8),e,0,.15,0),$(i,X(.15,.16,1.6,8),e,0,.98,0),$(i,X(.2,.16,.1,8),e,0,1.83,0),$(i,Y(.5,.12,.5),t,0,1.94,0),i.rotation.y=Math.round(r()*4)*J/2;break}case`brokenPillar`:{let e=a(13221284,.12),t=Lp(vp(13221284,.85));$(i,Y(.5,.12,.5),t,0,.06,0),$(i,X(.17,.17,.06,8),e,0,.15,0),$(i,X(.15,.16,.5,8),e,0,.43,0);for(let t=0;t<6;t++){let n=t/6*J*2,a=.1+r()*.25,o=$(i,Sp(.07,a,3),e,Math.cos(n)*.09,.68+a/2,Math.sin(n)*.09);o.rotation.y=-n,o.rotation.z=(r()-.5)*.3}$(i,X(.14,.15,.3,8),e,.28,.12,.1).rotation.set(J/2,0,o);break}case`brazier`:{let e=Lp(3881794);for(let t=0;t<3;t++){let n=t/3*J*2+o,r=$(i,X(.02,.025,.5,5),e,Math.cos(n)*.14,.25,Math.sin(n)*.14);r.rotation.z=-Math.cos(n)*.22,r.rotation.x=Math.sin(n)*.22}$(i,X(.26,.16,.18,8),e,0,.55,0),$(i,kp(.26,.02,5,12),e,0,.64,0).rotation.x=J/2;let t=$(i,Np(.22,8),Lp(8006160,{emissive:16734746,intensity:.7}),0,.645,0);t.rotation.x=-J/2;let n=new Dr;n.name=`flame`,n.position.y=.65,i.add(n);let r=Lp(16752688,{emissive:16738832,intensity:1.2}),a=Lp(16769658,{emissive:16761402,intensity:1.2});Z(n,Sp(.16,.3,6),r,0,.15,0),Z(n,Sp(.1,.24,5),a,.03,.2,-.02).rotation.y=.5,Z(n,Sp(.07,.2,5),r,-.06,.26,.04);for(let e of n.children)e.castShadow=!1;break}case`banner`:{let e=Lp(5913890);$(i,X(.02,.03,1.6,6),e,0,.8,0),$(i,X(.03,.04,.06,6),Lp(4868690),0,.03,0),$(i,wp(.04,6,5),Lp(Q.gold),0,1.62,0),$(i,X(.015,.015,.5,5),e,0,1.52,0).rotation.z=J/2;let t=Lp(n);$(i,Y(.42,.62,.025),t,0,1.2,.02);let a=$(i,Sp(.3,.26,4),t,0,.76,.02);a.rotation.set(J,J/4,0),a.scale.z=.06,$(i,Y(.3,.06,.03),Lp(yp(n,.6)),0,1.05,.02),i.rotation.y=Math.round(r()*4)*J/2;break}case`crystal`:{let e=Lp(8382709,{emissive:3393757,intensity:.9}),t=Lp(12449019,{emissive:6282216,intensity:.7});for(let[n,a,o,s,c]of[[0,.7,0,0,0],[.14,.45,.08,.5,.2],[-.15,.4,-.06,-.45,.1],[.05,.32,-.16,-.1,-.5],[-.06,.28,.16,.15,.55]]){let l=$(i,Dp(.1),r()>.5?e:t,n,a*.4,o);l.scale.set(1,a/.2,1),l.rotation.set(c,r()*J,s)}$(i,Op(.16),Lp(5987948),0,.03,0).scale.set(1.5,.4,1.5);break}case`crate`:{let e=a(10119738,.2),t=Lp(vp(_p(10119738,r,.1),.65));$(i,Y(.44,.44,.44),e,0,.22,0);for(let[e,n]of[[-.21,-.21],[.21,-.21],[-.21,.21],[.21,.21]])$(i,Y(.05,.46,.05),t,e,.23,n);for(let e of[.03,.41])$(i,Y(.47,.04,.05),t,0,e,.21),$(i,Y(.47,.04,.05),t,0,e,-.21),$(i,Y(.05,.04,.47),t,.21,e,0),$(i,Y(.05,.04,.47),t,-.21,e,0);i.rotation.y=(r()-.5)*.6;break}case`barrel`:{let e=a(9067056,.2),t=Lp(4868690);$(i,Mp(.21,.5),e,0,.25,0),$(i,Np(.18,10),Lp(vp(9067056,.8)),0,.501,0).rotation.x=-J/2;for(let e of[.1,.4])$(i,X(.205,.205,.035,10),t,0,e,0);i.rotation.y=o;break}case`ruinWall`:{let e=a(9143672,.12),t=Lp(vp(_p(9143672,r,.1),.8));$(i,Y(.9,.14,.34),t,0,.07,0);let n=[.95,.8,1,.6];for(let a=0;a<4;a++){let o=n[(a+Math.floor(r()*4))%4]*(.9+r()*.2);$(i,Y(.225,o,.3),a%2?e:t,-.3375+a*.225,o/2,0)}$(i,Y(.2,.12,.34),e,-.2,.42,0),$(i,Y(.18,.1,.33),t,.25,.26,0),i.rotation.y=Math.round(r()*2)*J/2;break}case`obsidianSpike`:{let e=Lp(1511967,{emissive:3807836,intensity:.18}),t=Lp(2234928,{emissive:4858480,intensity:.15}),n=$(i,Sp(.18,1,4),e,0,.5,0);n.rotation.y=o,n.rotation.z=(r()-.5)*.15,Rp($(i,Sp(.1,.5,4),t,.18,.22,.1),.15,o+.5,-.4),Rp($(i,Sp(.08,.38,4),t,-.16,.17,-.1),-.2,o+1.2,.45),$(i,Ap(.1),t,.05,.05,-.2).rotation.y=o;break}case`deadTree`:{let e=a(5917244,.15);$(i,X(.05,.1,1,6),e,0,.5,0);let t=(t,n,r,a,o,s,c)=>{let l=$(i,X(c*.4,c,a,5),e,t,n,r);return l.rotation.set(o,0,s),l.position.y+=Math.cos(s)*Math.cos(o)*a/2,l.position.x+=Math.sin(-s)*a/2,l.position.z+=Math.sin(o)*a/2,l};t(0,.95,0,.6,.1,.55+r()*.2,.05),t(0,.85,0,.55,-.4,-.6,.045),t(0,.75,0,.45,.5,-.1,.04),t(.25,1.35,.05,.3,-.2,.9,.025),t(-.25,1.25,-.15,.3,-.3,-1.1,.025),t(0,1,0,.35,0,.05,.03),i.rotation.y=o;break}}return i}var Gm={grass:7315530,dirt:10123862,stone:10722706,sand:14204296,snow:15660024,moss:7309914,wood:9069632,obsidian:3814208,ice:12575986,water:6982266,deep:3361370,lava:5909018,thicket:5208632,void:0},Km={grass:8019264,dirt:8019264,stone:8748918,sand:11768936,snow:9279395,moss:6974046,wood:6965808,obsidian:2762032,ice:9418956,water:6969928,deep:4868680,lava:3810850,thicket:6967352,void:0},qm=[3898840,13650490];function Jm(e,t,n){let r=e.at(t,n),i=ud(r.h);return r.terrain===`water`?i-.12:r.terrain===`lava`?i-.06:i}var Ym=class{map;arena;group=new Dr;pickMesh;water=null;lava=null;lavaMat=null;waterMat=null;time=0;layers={};fx=new Map;ice=new Map;particles=null;cursor;constructor(e,t){this.map=e,this.arena=t;let n=this.buildColumns(),r=new Ro({vertexColors:!0});this.pickMesh=new V(n,r),this.pickMesh.receiveShadow=!0,this.pickMesh.castShadow=!0,this.group.add(this.pickMesh),this.group.add(this.buildGridLines()),this.buildLiquids(),this.buildProps(),this.buildSkirt();for(let[t,n,r]of[[`move`,2783999,0],[`range`,16747066,1],[`area`,16769354,2],[`danger`,16722474,3],[`path`,10477823,4],[`ally`,7012250,1]]){let i=new Xm(e,n,r);this.layers[t]=i,this.group.add(i.mesh)}this.cursor=Zm(),this.cursor.visible=!1,this.group.add(this.cursor),t.look.particles!==`none`&&(this.particles=new $m(t.look.particles,e.width,e.height),this.group.add(this.particles.points))}heightForSides(e,t){let n=this.map.get(e,t);return!n||n.terrain===`void`?-6:n.terrain===`water`?n.baseH-.5:n.terrain===`deep`?n.baseH-1.4:n.terrain===`lava`?n.baseH-.15:n.baseH}buildColumns(){let e=[],t=[],n=[],r=new z,i=(r,i,a,o,s,c)=>{for(let l of[r,i,a,r,a,o])e.push(l[0],l[1],l[2]),t.push(s[0],s[1],s[2]),n.push(c.r,c.g,c.b)},a=this.map;for(let e of a.tiles){if(e.terrain===`void`)continue;let t=this.heightForSides(e.x,e.y),n=t*ld,a=e.x-.5,o=e.x+.5,s=e.y-.5,c=e.y+.5,l=((e.x*73856093^e.y*19349663)>>>0)%1e3/1e3;r.setHex(Gm[e.terrain]),r.offsetHSL(0,0,((e.x+e.y)%2==0?.018:-.018)+(l-.5)*.04),i([a,n,c],[o,n,c],[o,n,s],[a,n,s],[0,1,0],r);let u=[[0,1,[o,0,c],[a,0,c],[0,0,1]],[1,0,[o,0,s],[o,0,c],[1,0,0]],[0,-1,[a,0,s],[o,0,s],[0,0,-1]],[-1,0,[a,0,c],[a,0,s],[-1,0,0]]];for(let[n,a,o,s,c]of u){let l=this.heightForSides(e.x+n,e.y+a);if(l>=t)continue;let u=Math.max(l,-6),d=[];for(let e=Math.floor(t*2)/2;e>u;--e)d.push(e);for(let n of d){let a=Math.min(t,n),l=Math.max(u,n-1);if(a<=l)continue;let d=Math.floor(n);r.setHex(Km[e.terrain]),a===t&&(e.terrain===`grass`||e.terrain===`thicket`||e.terrain===`snow`||e.terrain===`moss`)&&r.setHex(Gm[e.terrain]).multiplyScalar(.82),r.offsetHSL(0,0,d%2==0?-.02:.015);let f=c[0]===0?1:.92;r.multiplyScalar(f*(l<0?.75:1)),i([o[0],a*ld,o[2]],[s[0],a*ld,s[2]],[s[0],l*ld,s[2]],[o[0],l*ld,o[2]],c,r)}}}let o=new ki;return o.setAttribute(`position`,new B(e,3)),o.setAttribute(`normal`,new B(t,3)),o.setAttribute(`color`,new B(n,3)),o.computeBoundingSphere(),o}buildGridLines(){let e=[];for(let t of this.map.tiles){if(t.terrain===`void`||t.terrain===`deep`||t.terrain===`lava`||t.terrain===`water`)continue;let n=ud(t.baseH)+.004,r=t.x-.5,i=t.x+.5,a=t.y-.5,o=t.y+.5;e.push(r,n,a,i,n,a,i,n,a,i,n,o,i,n,o,r,n,o,r,n,o,r,n,a)}let t=new ki;return t.setAttribute(`position`,new B(e,3)),new Da(t,new ha({color:0,transparent:!0,opacity:.16}))}buildLiquids(){let e=[],t=[];for(let n of this.map.tiles){let r=n.terrain===`water`||n.terrain===`deep`?e:n.terrain===`lava`?t:null;if(!r)continue;let i=n.terrain===`lava`?ud(n.baseH)-.06:ud(n.baseH)-(n.terrain===`deep`?.18:.1),a=n.x-.5,o=n.x+.5,s=n.y-.5,c=n.y+.5;r.push(a,i,c,o,i,c,o,i,s,a,i,c,o,i,s,a,i,s)}if(e.length){let t=new ki;t.setAttribute(`position`,new B(e,3)),t.computeVertexNormals(),this.waterMat=new Ro({color:4165568,transparent:!0,opacity:.72,emissive:666176}),this.water=new V(t,this.waterMat),this.water.receiveShadow=!0,this.group.add(this.water)}if(t.length){let e=new ki;e.setAttribute(`position`,new B(t,3)),this.lavaMat=new Vi({color:16734736,toneMapped:!1}),this.lava=new V(e,this.lavaMat),this.group.add(this.lava)}}buildProps(){for(let e of this.map.tiles){if(!e.prop)continue;let t=+(e.y<this.map.height/2),n=Wm(e.prop,e.x*31+e.y*17,qm[t]);n.position.set(e.x,ud(e.baseH),e.y),n.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),this.group.add(n)}}buildSkirt(){let e=this.map.width,t=this.map.height,n=new V(new za(e+.6,2,t+.6),new Ro({color:this.arena.look.skirt}));if(n.position.set((e-1)/2,-4.02,(t-1)/2),n.receiveShadow=!0,this.group.add(n),this.map.tiles.some(e=>e.terrain===`void`)){let n=new V(new So(e,t),new Vi({color:460556}));n.rotation.x=-Math.PI/2,n.position.set((e-1)/2,-2.95,(t-1)/2),this.group.add(n)}}tileFromHit(e){let t=e.face?.normal,n=e.point.clone();t&&Math.abs(t.y)<.5&&n.addScaledVector(t,-.05);let r=Math.round(n.x),i=Math.round(n.z);return this.map.inBounds(r,i)?{x:r,y:i}:null}setCursor(e,t=0,n=16777215){if(e===null||!this.map.inBounds(e,t))this.cursor.visible=!1;else{this.cursor.visible=!0,this.cursor.position.set(e,Jm(this.map,e,t)+.03,t);for(let e of this.cursor.children)e.material.color.setHex(n)}}setTileEffect(e,t,n,r,i,a,o){let s=`${e},${t},${n}`,c=this.fx.get(s);if(c&&(this.group.remove(c),this.fx.delete(s)),n===`icewall`||!r||a&&i!==o)return;let l=Qm(n,i);l.position.set(e,Jm(this.map,e,t)+.02,t),this.group.add(l),this.fx.set(s,l)}setHeight(e,t,n){let r=this.map.at(e,t),i=`${e},${t}`,a=this.ice.get(i),o=n-r.baseH;if(o<=0){a&&(this.group.remove(a),this.ice.delete(i));return}let s=a??new V(new za(.98,1,.98),new Ro({color:12577535,transparent:!0,opacity:.86,emissive:2775664}));s.castShadow=!0,s.receiveShadow=!0,s.scale.y=o*ld,s.position.set(e,ud(r.baseH)+o*ld/2,t),a||(this.group.add(s),this.ice.set(i,s))}update(e){if(this.time+=e,this.lavaMat){let e=.5+.5*Math.sin(this.time*2.1);this.lavaMat.color.setRGB(.95,.16+.1*e,.02+.02*e)}this.water&&(this.water.position.y=Math.sin(this.time*1.6)*.012);for(let e of this.fx.values()){let t=e.userData.anim;t&&t(this.time)}for(let e of Object.values(this.layers))e.update(this.time);this.cursor.position.y+=Math.sin(this.time*5)*6e-4,this.particles?.update(e)}},Xm=class{map;color;mesh;pulse;constructor(e,t,n){this.map=e,this.color=t;let r=new So(.92,.92);r.rotateX(-Math.PI/2);let i=new Vi({color:16777215,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2-n,polygonOffsetUnits:-2-n});this.mesh=new ua(r,i,e.width*e.height),this.mesh.count=0,this.mesh.renderOrder=10+n,this.mesh.frustumCulled=!1,this.pulse=n===3,this.yOffset=.012+n*.004}yOffset;set(e,t){let n=new $n,r=new z,i=0;for(let a of e)this.map.inBounds(a.x,a.y)&&(n.makeTranslation(a.x,Jm(this.map,a.x,a.y)+this.yOffset,a.y),this.mesh.setMatrixAt(i,n),r.setHex(typeof t==`function`?t(a.x,a.y):t??this.color),this.mesh.setColorAt(i,r),i++);this.mesh.count=i,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}clear(){this.mesh.count=0}update(e){let t=this.mesh.material;t.opacity=this.pulse?.3+.22*(.5+.5*Math.sin(e*6)):.52+.08*Math.sin(e*3)}};function Zm(){let e=new Dr,t=new Vi({color:16777215,transparent:!0,opacity:.95,depthWrite:!1}),n=new za(.98,.03,.06);for(let r=0;r<4;r++){let i=new V(n,t),a=r*Math.PI/2;i.position.set(Math.sin(a)*.47,0,Math.cos(a)*.47),i.rotation.y=a,e.add(i)}return e.renderOrder=20,e}function Qm(e,t){let n=new Dr;switch(e){case`fire`:{let e=[new Vi({color:16742938,transparent:!0,opacity:.9}),new Vi({color:16765498,transparent:!0,opacity:.85})],t=[];for(let r=0;r<5;r++){let i=new V(new Ha(.09+Math.random()*.05,.3+Math.random()*.2,5),e[r%2]);i.position.set((Math.random()-.5)*.7,.15,(Math.random()-.5)*.7),n.add(i),t.push(i)}let r=new V(new So(.95,.95).rotateX(-Math.PI/2),new Vi({color:16734736,transparent:!0,opacity:.35,depthWrite:!1}));r.position.y=.01,n.add(r);let i=t.map(()=>Math.random()*10);n.userData.anim=e=>t.forEach((t,n)=>{let r=.8+.35*Math.sin(e*9+i[n]);t.scale.set(1,r,1),t.position.y=.15*r});break}case`holy`:{let e=new V(new Co(.28,.44,24).rotateX(-Math.PI/2),new Vi({color:16771488,transparent:!0,opacity:.7,depthWrite:!1,side:2})),t=new V(new So(.95,.95).rotateX(-Math.PI/2),new Vi({color:16773808,transparent:!0,opacity:.28,depthWrite:!1}));n.add(e,t),n.userData.anim=n=>{e.rotation.y=n*.8,t.material.opacity=.22+.1*Math.sin(n*2.5)};break}case`caltrops`:{let e=new Ro({color:5921376});for(let t=0;t<7;t++){let t=new V(new To(.06),e);t.position.set((Math.random()-.5)*.75,.04,(Math.random()-.5)*.75),t.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),n.add(t)}break}case`smoke`:{let e=new Ro({color:12105920,transparent:!0,opacity:.55,depthWrite:!1}),t=[];for(let r=0;r<4;r++){let r=new V(new yo(.22+Math.random()*.1,0),e);r.position.set((Math.random()-.5)*.6,.25+Math.random()*.3,(Math.random()-.5)*.6),n.add(r),t.push(r)}let r=t.map(()=>Math.random()*10);n.userData.anim=e=>t.forEach((t,n)=>{t.position.y=.3+.12*Math.sin(e*.9+r[n]),t.rotation.y=e*.2+r[n]});break}case`snare`:case`firetrap`:{let r=e===`snare`?13148240:16738864,i=new V(new Eo(.22,.03,4,12).rotateX(Math.PI/2),new Ro({color:r,emissive:r,emissiveIntensity:.3}));i.position.y=.03;let a=new V(new Ba(.1,8).rotateX(-Math.PI/2),new Vi({color:t===0?6992127:16738906,transparent:!0,opacity:.8}));a.position.y=.035,n.add(i,a),n.userData.anim=e=>{i.rotation.y=e};break}}return n}var $m=class{kind;w;h;points;vel;pos;n=160;constructor(e,t,n){this.kind=e,this.w=t,this.h=n,this.pos=new Float32Array(this.n*3),this.vel=new Float32Array(this.n*3);for(let e=0;e<this.n;e++)this.respawn(e,!0);let r=new ki;r.setAttribute(`position`,new hi(this.pos,3));let i=new Oa({color:e===`embers`?16747066:e===`snow`?16777215:e===`leaves`?10141792:16773832,size:e===`snow`?.09:e===`leaves`?.1:.06,transparent:!0,opacity:e===`motes`?.6:.9,depthWrite:!1});this.points=new Na(r,i),this.points.frustumCulled=!1}respawn(e,t){let n=this.pos,r=this.vel;n[e*3]=-1+Math.random()*(this.w+2),n[e*3+2]=-1+Math.random()*(this.h+2);let i=this.kind===`embers`||this.kind===`motes`;n[e*3+1]=t?Math.random()*7:i?-.5:7,r[e*3]=(Math.random()-.5)*.3,r[e*3+2]=(Math.random()-.5)*.3,r[e*3+1]=this.kind===`embers`?.4+Math.random()*.5:this.kind===`motes`?.08+Math.random()*.1:-(.35+Math.random()*.4)}update(e){let t=this.pos,n=this.vel;for(let r=0;r<this.n;r++)t[r*3]+=n[r*3]*e+Math.sin(t[r*3+1]*2+r)*.002,t[r*3+1]+=n[r*3+1]*e,t[r*3+2]+=n[r*3+2]*e,(t[r*3+1]>7.5||t[r*3+1]<-1)&&this.respawn(r,!1);this.points.geometry.getAttribute(`position`).needsUpdate=!0}},eh=[3898840,13650490],th=class{unit;map;root=new Dr;rig;ring;label;hpFill;hpGhost;statusRow;koBadge;hp;maxHp;angle=0;angleGoal=0;bodyBaseY;idleT=Math.random()*10;busy=0;ko=!1;stealth=!1;channel=null;statuses=new Set;flash=0;constructor(e,t,n){this.unit=e,this.map=t;let r=Id(e.gear.weapon);e.gear.armor,this.rig=Rm({classId:e.classId,subclassId:e.subclassId,weapon:r.kind,armor:nh(e),teamColor:eh[e.team],seed:e.seed}),this.rig.root.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),this.bodyBaseY=this.rig.body.position.y,this.root.add(this.rig.root);let i=new Co(.3,.4,24);i.rotateX(-Math.PI/2),this.ring=new V(i,new Vi({color:eh[e.team],transparent:!0,opacity:.85,depthWrite:!1})),this.ring.position.y=.02,this.ring.renderOrder=5,this.root.add(this.ring),this.hp=e.hp,this.maxHp=e.stats.hp,this.label=document.createElement(`div`),this.label.className=`unit-tag team${e.team}`,this.label.innerHTML=`<div class="tag-status"></div><div class="tag-hp"><div class="tag-ghost"></div><div class="tag-fill"></div></div><div class="tag-ko"></div>`,n.appendChild(this.label),this.hpFill=this.label.querySelector(`.tag-fill`),this.hpGhost=this.label.querySelector(`.tag-ghost`),this.statusRow=this.label.querySelector(`.tag-status`),this.koBadge=this.label.querySelector(`.tag-ko`),this.setHp(e.hp,!0),this.placeAt(e.x,e.y),this.setFacing(e.facing,!0);for(let t of e.statuses)this.statuses.add(t.id);this.renderStatuses()}placeAt(e,t){this.root.position.set(e,Jm(this.map,e,t),t)}tilePos(e){return new L(e.x,Jm(this.map,e.x,e.y),e.y)}setFacing(e,t=!1){this.angleGoal=e*Math.PI/2,t&&(this.angle=this.angleGoal)}faceToward(e){let t=e.x-this.root.position.x,n=e.z-this.root.position.z;Math.abs(t)+Math.abs(n)<.01||(this.angleGoal=Math.atan2(t,n))}setHp(e,t=!1){this.hp=e;let n=Math.max(0,Math.min(1,e/this.maxHp))*100;this.hpFill.style.width=`${n}%`,this.hpFill.classList.toggle(`low`,n<30),t?this.hpGhost.style.width=`${n}%`:setTimeout(()=>this.hpGhost.style.width=`${n}%`,450)}setStatus(e,t){t?this.statuses.add(e):this.statuses.delete(e),e===`stealth`&&(this.stealth=t,Hm(this.rig,t?.35:1)),e===`airborne`&&(this.root.visible=!t),this.renderStatuses()}renderStatuses(){let e=[...this.statuses].filter(e=>e!==`airborne`&&e!==`sprint`);this.statusRow.innerHTML=e.slice(0,6).map(e=>`<span style="color:${Gd[e].color}" title="${Gd[e].name}">${Gd[e].glyph}</span>`).join(``)}hitFlash(e=16724016){this.flash=1,this.flashColor=e}flashColor=16724016;setSelected(e){this.ring.material.opacity=e?1:.85,this.ring.scale.setScalar(e?1.18:1)}update(e,t){let n=this.angleGoal-this.angle;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;this.angle+=n*Math.min(1,e*14),this.rig.root.rotation.y=this.angle,this.idleT+=e,!this.busy&&!this.ko&&(this.rig.body.position.y=this.bodyBaseY+Math.sin(this.idleT*2.4)*.012,this.rig.armL.rotation.x=Math.sin(this.idleT*2.4)*.05,this.rig.armR.rotation.x=-Math.sin(this.idleT*2.4)*.05,this.rig.head.rotation.y=Math.sin(this.idleT*.7)*.12),this.flash>0&&(this.flash=Math.max(0,this.flash-e*4),Vm(this.rig,this.flashColor,this.flash*.8)),this.channel&&(this.channel.rotation.y+=e*1.5);let r=this.root.position.clone();r.y+=(this.ko?.45:this.rig.height)+.18;let i=t.project(r);this.label.style.transform=`translate(${i.x}px, ${i.y}px)`,this.label.style.display=this.root.visible||this.ko?``:`none`}async walk(e,t,n){this.busy++;try{for(let r=1;r<t.length;r++){let i=this.tilePos(t[r-1]),a=this.tilePos(t[r]);this.faceToward({x:a.x,z:a.z});let o=Math.abs(a.y-i.y),s=o>.05?.25+o*.5:.06,c=170+o*120;n?.(),await e.run(c,e=>{let t=i.clone().lerp(a,e);t.y=i.y+(a.y-i.y)*e+Math.sin(Math.PI*e)*s,this.root.position.copy(t);let n=Math.sin(e*Math.PI*2);this.rig.legL.rotation.x=n*.6,this.rig.legR.rotation.x=-n*.6,this.rig.armL.rotation.x=-n*.4,this.rig.armR.rotation.x=n*.4})}}finally{this.rig.legL.rotation.x=0,this.rig.legR.rotation.x=0,this.busy--}}async leap(e,t,n,r){this.busy++;let i=this.tilePos(t),a=this.tilePos(n);r!==`land`&&this.faceToward({x:a.x,z:a.z});try{if(r===`shadowstep`){await e.run(160,e=>Hm(this.rig,1-e)),this.root.position.copy(a),await e.run(160,e=>Hm(this.rig,this.stealth?.35:e));return}if(r===`leap`&&t.x===n.x&&t.y===n.y){await e.run(380,e=>this.root.position.y=i.y+up.in(e)*9);return}if(r===`land`){this.root.visible=!0,await e.run(320,e=>{this.root.position.set(a.x,a.y+(1-up.in(e))*9,a.z)});return}let o=i.distanceTo(a),s=r===`grapple`?.3:r===`dash`?.15+o*.05:.8+o*.25;await e.run(r===`dash`?220:300+o*60,e=>{let t=i.clone().lerp(a,r===`grapple`?up.inOut(e):e);t.y=i.y+(a.y-i.y)*e+Math.sin(Math.PI*e)*s,this.root.position.copy(t),this.rig.body.rotation.x=r===`vault`?Math.sin(Math.PI*e)*-.8:0})}finally{this.rig.body.rotation.x=0,this.busy--}}async attack(e,t,n){n&&this.faceToward({x:n.x,z:n.z}),this.busy++;let r=this.rig,i=new L(Math.sin(this.angleGoal),0,Math.cos(this.angleGoal)),a=this.root.position.clone(),o=()=>{r.armR.rotation.x=0,r.armL.rotation.x=0,r.body.rotation.x=0,r.body.position.y=this.bodyBaseY,this.busy--};switch(t){case`swing`:case`slam`:{await e.run(200,e=>{r.armR.rotation.x=-2.6*up.out(e),r.body.rotation.x=-.15*e});let n=t===`slam`?.28:.2;e.run(260,e=>{r.armR.rotation.x=-2.6+2*up.out(Math.min(1,e*2))+.6*Math.max(0,e*2-1),r.body.rotation.x=-.15+.35*Math.sin(Math.PI*e),this.root.position.copy(a).addScaledVector(i,Math.sin(Math.PI*e)*n)}).then(o),await e.wait(90);return}case`thrust`:case`bite`:await e.run(150,e=>{r.armR.rotation.x=-1.2*e,this.root.position.copy(a).addScaledVector(i,-.08*e)}),e.run(220,e=>{r.armR.rotation.x=-1.2-.4*Math.sin(Math.PI*e),this.root.position.copy(a).addScaledVector(i,-.08+Math.sin(Math.PI*e)*.38),t===`bite`&&(r.head.rotation.x=Math.sin(Math.PI*e)*.4)}).then(()=>{r.head.rotation.x=0,this.root.position.copy(a),o()}),await e.wait(90);return;case`shoot`:await e.run(260,e=>{r.armL.rotation.x=-1.5*up.out(e),r.armR.rotation.x=-1.4*up.out(e)}),e.run(240,e=>{r.armL.rotation.x=-1.5*(1-up.in(e)),r.armR.rotation.x=-1.4*(1-e)+.3*Math.sin(Math.PI*e)}).then(o);return;case`throw`:await e.run(200,e=>r.armR.rotation.x=1*e),e.run(220,e=>r.armR.rotation.x=1-3*up.out(e)+2*e*e).then(o),await e.wait(70);return;case`cast`:await e.run(320,e=>{r.armL.rotation.x=-2.4*up.out(e),r.armR.rotation.x=-2.4*up.out(e),r.body.position.y=this.bodyBaseY+.06*e}),e.run(260,e=>{r.armL.rotation.x=-2.4*(1-e),r.armR.rotation.x=-2.4*(1-e),r.body.position.y=this.bodyBaseY+.06*(1-e)}).then(o);return;default:await e.run(220,e=>{r.body.position.y=this.bodyBaseY+Math.sin(Math.PI*e)*.12,r.armL.rotation.x=-.8*Math.sin(Math.PI*e),r.armR.rotation.x=-.8*Math.sin(Math.PI*e)}),o();return}}async recoil(e,t){this.busy++;let n=this.root.position.clone(),r=t?n.clone().sub(t).setY(0).normalize():new L;await e.run(200,e=>{this.root.position.copy(n).addScaledVector(r,Math.sin(Math.PI*e)*.12),this.rig.body.rotation.x=Math.sin(Math.PI*e)*.25}),this.rig.body.rotation.x=0,this.busy--}async slide(e,t){this.busy++;for(let n=1;n<t.length;n++){let r=this.tilePos(t[n-1]),i=this.tilePos(t[n]),a=r.y-i.y;await e.run(140+Math.max(0,a)*90,e=>{let t=r.clone().lerp(i,Math.min(1,e*1.4));t.y=a>0?r.y-a*up.in(e):r.y+(i.y-r.y)*e,this.root.position.copy(t)})}this.busy--}async plunge(e){let t=this.root.position.clone();await e.run(600,e=>{this.root.position.set(t.x,t.y-up.in(e)*8,t.z),Hm(this.rig,1-e)}),this.root.visible=!1}async knockOut(e){this.ko=!0,this.busy++,await e.run(380,e=>{this.rig.body.rotation.x=-1.35*up.out(e),this.rig.body.position.y=this.bodyBaseY-.15*e}),Hm(this.rig,.6),this.label.classList.add(`ko`),this.statuses.clear(),this.renderStatuses(),this.busy--}setKoCount(e){this.koBadge.textContent=e===null?``:`${e}`}async revive(e){this.ko=!1,this.label.classList.remove(`ko`),this.koBadge.textContent=``,Hm(this.rig,this.stealth?.35:1),await e.run(380,e=>{this.rig.body.rotation.x=-1.35*(1-up.out(e)),this.rig.body.position.y=this.bodyBaseY-.15*(1-e)})}async fadeOut(e){await e.run(500,e=>Hm(this.rig,.6*(1-e))),this.root.visible=!1,this.label.style.display=`none`,this.label.remove()}dispose(){this.label.remove(),Um(this.rig)}};function nh(e){return rh[e.gear.armor]??`medium`}var rh=Object.fromEntries(Object.values(Pd).map(e=>[e.id,e.kind])),ih=new Set([`damage`,`miss`,`heal`,`status`,`text`,`mp`,`surge`,`surgeReady`,`collide`,`item`,`log`,`face`,`castEnd`,`tile`,`terrain`]),ah=class{stage;battle;overlay;audio;terrain;fx;tw=new lp;units=new Map;root=new Dr;castFx=new Map;viewerTeam=0;follow=!0;constructor(e,t,n,r){this.stage=e,this.battle=t,this.overlay=n,this.audio=r;let i=t.arena.look;e.setLook(i.sky,i.fog,i.sun,i.sunIntensity,i.hemiSky,i.hemiGround),this.terrain=new Ym(t.map,t.arena),this.root.add(this.terrain.group),this.fx=new pp(e,this.tw,n),this.root.add(this.fx.group),e.scene.add(this.root);let a=0;for(let e of t.map.tiles)a=Math.max(a,e.h);e.frameMap(t.map.width,t.map.height,a);for(let e of t.units)this.addUnit(e.id)}addUnit(e){let t=new th(this.battle.unit(e),this.battle.map,this.overlay);return this.units.set(e,t),this.root.add(t.root),t}update(e){this.tw.update(e),this.terrain.update(e*this.tw.speed),this.fx.update(e);for(let t of this.units.values())t.update(e*Math.max(1,this.tw.speed*.8),this.stage)}dispose(){this.stage.scene.remove(this.root);for(let e of this.units.values())e.dispose();this.overlay.innerHTML=``}tilePos(e,t=0){return new L(e.x,Jm(this.battle.map,e.x,e.y)+t,e.y)}unitPos(e,t=.6){let n=this.units.get(e);return n?n.root.position.clone().add(new L(0,t,0)):new L}focusUnit(e){let t=this.units.get(e);t&&this.stage.focus(t.root.position.x,t.root.position.y*.6,t.root.position.z)}focusPoint(e){this.follow&&this.stage.focus(e.x,e.y*.6,e.z)}syncAll(){for(let e of this.battle.units){let t=this.units.get(e.id);if(!t){if(e.gone)continue;t=this.addUnit(e.id)}e.gone?(t.root.visible=!1,t.label.style.display=`none`):(t.busy||(t.placeAt(e.x,e.y),t.setFacing(e.facing)),t.setHp(e.hp),t.root.visible=!e.statuses.some(e=>e.id===`airborne`),t.setKoCount(e.ko?e.koTimer:null))}}sfx(e,t=1,n=1){this.audio.sfx(e,{volume:t,pitch:n})}async play(e,t){let n=0;for(;n<e.length;){let r=e[n];if(ih.has(r.t)){let r=[];for(;n<e.length&&ih.has(e[n].t);)r.push(e[n++]);await this.playBatch(r,t)}else n++,await this.playOne(r,t)}t.changed()}async playOne(e,t){let n=this.battle;switch(e.t){case`turn`:{let r=n.unit(e.unit);for(let e of this.units.values())e.setSelected(!1);this.units.get(e.unit)?.setSelected(!0),this.focusUnit(e.unit),t.turn(e.unit),this.sfx(r.team===this.viewerTeam&&!r.ai?`yourTurn`:`turnStart`,.7),await this.tw.wait(180);return}case`skip`:this.fx.text(this.unitPos(e.unit,1.2),e.reason,`bad`),this.sfx(`debuff`,.6),await this.tw.wait(450);return;case`move`:{let t=this.units.get(e.unit);if(!t)return;this.focusPoint(this.tilePos(e.path[e.path.length-1]));let n=0;await t.walk(this.tw,e.path,()=>this.sfx(`step`,.5,.9+n++%2*.15));return}case`leap`:{let t=this.units.get(e.unit);if(!t)return;e.kind===`shadowstep`?this.sfx(`vanish`):e.kind===`grapple`?this.sfx(`teleport`):e.kind===`land`?this.sfx(`explosion`,.8):this.sfx(`jump`),(e.kind!==`leap`||e.from.x!==e.to.x||e.from.y!==e.to.y)&&this.focusPoint(this.tilePos(e.to)),await t.leap(this.tw,e.from,e.to,e.kind),(e.kind===`leap`||e.kind===`vault`||e.kind===`dash`)&&this.sfx(`land`,.7),e.kind===`land`&&(this.stage.addShake(.25),this.fx.ring(this.tilePos(e.to),16767136,2.2));return}case`act`:{let t=this.units.get(e.unit);if(!t)return;let r=e.target.x===n.unit(e.unit).x&&e.target.y===n.unit(e.unit).y,i=this.tilePos(e.target);r||this.focusPoint(t.root.position.clone().lerp(i,.5));let a=e.ability.startsWith(`item:`)?null:hd(e.ability);switch(e.anim){case`swing`:case`slam`:this.sfx(`swing`);break;case`thrust`:this.sfx(`swing`,.7,1.2);break;case`shoot`:this.sfx(`bowDraw`,.7);break;case`cast`:this.sfx(a?.castTime?`castStart`:`castRelease`,.8),a?.element&&this.fx.rise(t.root.position,dp[a.element],8);break;case`throw`:this.sfx(`swing`,.6,.8);break;case`bite`:this.sfx(`swing`,.6,1.4);break;default:this.sfx(a?.id===`howl`?`howl`:`buff`,.7),a?.id===`callWolf`&&this.sfx(`howl`,.6)}a?.surge&&this.stage.addShake(.08),await t.attack(this.tw,e.anim,r?null:i);return}case`projectile`:{let t=this.unitPos(e.fromUnit,.7),r=n.unitAt(e.to.x,e.to.y),i=r?this.unitPos(r.id,.5):this.tilePos(e.to,.3);e.kind===`arrow`?this.sfx(`arrow`):(e.kind===`bolt`||e.kind===`hook`)&&this.sfx(`bolt`),await this.fx.projectile(t,i,e.kind,e.arc);return}case`chain`:this.sfx(`lightning`),await this.fx.lightning(e.points.map(e=>this.tilePos(e,.6)));return;case`aoe`:{let t=dp[e.element],n=this.tilePos(e.center),r=e.tiles.map(e=>this.tilePos(e)),i=e.tiles.length>=9;switch(e.element){case`fire`:this.sfx(i||e.ability===`fireball`||e.ability===`blastCharge`||e.ability===`fireTrap`?`explosion`:`fire`),(e.ability===`meteor`||e.ability===`powderKeg`)&&this.fx.pillar(n,16742954);for(let e of r)this.fx.burst(e.clone().add(new L(0,.2,0)),Math.random()<.5?16738848:16760896,5,2.4);this.stage.addShake(i?.3:.12);break;case`frost`:this.sfx(`frost`);for(let e of r)this.fx.burst(e.clone().add(new L(0,.2,0)),13628671,4,1.6);break;case`storm`:if(this.sfx(`lightning`),i)for(let e of r.filter((e,t)=>t%3==0))this.fx.bolt(e);else this.fx.bolt(n);this.stage.addShake(.1);break;case`radiant`:this.sfx(`holy`),this.fx.pillar(n,16773296,500);break;case`shadow`:this.sfx(`poison`);for(let e of r)this.fx.burst(e.clone().add(new L(0,.3,0)),9067263,4,.8,-.5);break;default:this.sfx(`slash`)}this.fx.ring(n,t,1+(e.tiles.length>5?1.5:.5)),await this.fx.area(r,t,380);return}case`push`:{let t=this.units.get(e.unit);if(!t)return;e.fall>0&&this.sfx(`fall`,.8),await t.slide(this.tw,e.path);let r=e.path[e.path.length-1],i=n.map.at(r.x,r.y);i.terrain===`void`||i.terrain===`deep`?(this.sfx(i.terrain===`deep`?`splash`:`fall`),await t.plunge(this.tw)):e.fall>0&&(this.sfx(`land`),this.stage.addShake(.12));return}case`ko`:{let t=this.units.get(e.unit);if(!t)return;this.sfx(`ko`),this.fx.burst(t.root.position.clone().add(new L(0,.5,0)),16777215,10,1.5),await t.knockOut(this.tw),t.setKoCount(n.unit(e.unit).koTimer);return}case`gone`:{let t=this.units.get(e.unit);if(!t)return;t.root.visible?await t.fadeOut(this.tw):t.label.style.display=`none`;return}case`revive`:{let t=this.units.get(e.unit);if(!t)return;this.sfx(`revive`),this.fx.pillar(t.root.position,16774336,600),this.fx.rise(t.root.position,16773280,16),await t.revive(this.tw),t.setHp(e.hp),this.fx.text(this.unitPos(e.unit,1.1),`Revived`,`good`);return}case`summon`:{let t=this.units.get(e.unit)??this.addUnit(e.unit);this.sfx(`summon`),this.fx.rise(t.root.position,10477728,14),this.fx.ring(t.root.position,10477728,1),await this.tw.wait(250);return}case`cast`:{let t=this.units.get(e.unit);if(!t)return;let r=hd(e.ability),i=dp[r.element??`arcane`],a=this.fx.castCircle(t.root.position,i);t.channel=a,this.castFx.set(e.id,{circle:a,tiles:e.tiles,team:n.unit(e.unit).team}),this.refreshDanger(),this.fx.text(this.unitPos(e.unit,1.2),`${r.name}…`,`info`),await this.tw.wait(300);return}case`end`:this.audio.music(e.winner===this.viewerTeam?`victory`:`defeat`,.2),await this.tw.wait(400);return;default:return}}async playBatch(e,t){let n=this.battle,r=0,i=!1;for(let a of e)switch(a.t){case`damage`:{let e=this.units.get(a.unit);if(!e)break;e.setHp(a.hp),a.amount>0&&e.hitFlash(a.crit?16777215:16724016);let t=dp[a.element];this.fx.burst(e.root.position.clone().add(new L(0,.5,0)),a.element===`physical`?16728128:t,a.crit?16:8,2),this.fx.text(this.unitPos(a.unit,.9),a.absorbed>0&&a.amount===0?`(${a.absorbed})`:`${a.amount}${a.absorbed?` (${a.absorbed})`:``}`,a.crit?`crit`:`dmg`,a.crit),a.back&&this.fx.text(this.unitPos(a.unit,1.25),`Back!`,`info`),e.recoil(this.tw,null),i||=(this.sfx(a.crit?`crit`:a.element===`fire`?`fire`:a.element===`frost`?`shatter`:a.element===`shadow`?`shadow`:a.element===`radiant`?`holy`:`hit`,.9),!0),a.crit&&this.stage.addShake(.12),r=Math.max(r,420);break}case`miss`:this.fx.text(this.unitPos(a.unit,.9),`Miss`,`miss`),this.sfx(`miss`),r=Math.max(r,360);break;case`heal`:{let e=this.units.get(a.unit);if(!e)break;e.setHp(a.hp),a.amount>0&&(this.fx.text(this.unitPos(a.unit,.9),`+${a.amount}`,`heal`),this.fx.rise(e.root.position,8060832,8),this.sfx(`heal`,.8),r=Math.max(r,380));break}case`mp`:a.amount>0&&(this.fx.text(this.unitPos(a.unit,.9),`+${a.amount} MP`,`mp`),r=Math.max(r,300));break;case`status`:{let e=this.units.get(a.unit);if(!e)break;if(e.setStatus(a.status,a.on),a.on&&a.status!==`airborne`&&a.status!==`sprint`){let e=Gd[a.status];this.fx.text(this.unitPos(a.unit,1.15),e.name,e.kind===`debuff`?`bad`:`good`);let t=a.status===`frozen`?`frost`:a.status===`poison`?`poison`:a.status===`stealth`?`vanish`:a.status===`barrier`?`shield`:a.status===`burn`?`burnTick`:e.kind===`debuff`?`debuff`:`buff`;this.sfx(t,.6),r=Math.max(r,300)}break}case`text`:this.fx.text(this.unitPos(a.unit,1.3),a.text,a.tone,a.tone===`surge`),a.tone===`surge`?(this.sfx(`surge`),this.stage.addShake(.1),r=Math.max(r,600)):a.text.startsWith(`Stole`)?this.sfx(`steal`):a.text===`Counter!`?this.sfx(`counter`):(a.text===`Snared!`||a.text===`Fire trap!`)&&this.sfx(`trap`),r=Math.max(r,350);break;case`surgeReady`:n.unit(a.unit).team===this.viewerTeam&&this.sfx(`surgeReady`,.6);break;case`collide`:this.sfx(`thud`),this.stage.addShake(.15),this.fx.text(this.unitPos(a.unit,1.1),`Slam!`,`bad`);break;case`log`:t.log(a.text);break;case`face`:{let e=this.units.get(a.unit);(e&&!e.busy||e)&&e.setFacing(a.dir);break}case`castEnd`:{let e=this.castFx.get(a.id);if(e){this.fx.remove(e.circle);for(let t of this.units.values())t.channel===e.circle&&(t.channel=null);this.castFx.delete(a.id),this.refreshDanger(),a.interrupted&&this.sfx(`uiCancel`,.6)}break}case`tile`:this.terrain.setTileEffect(a.x,a.y,a.effect,a.on,a.team,a.hidden,this.viewerTeam),a.on&&(!a.hidden||a.team===this.viewerTeam)&&(a.effect===`smoke`&&this.sfx(`smoke`,.5),(a.effect===`snare`||a.effect===`firetrap`)&&this.sfx(`trap`,.4));break;case`terrain`:{this.terrain.setHeight(a.x,a.y,a.h),this.sfx(a.h>n.map.at(a.x,a.y).baseH?`frost`:`shatter`,.5);let e=n.unitAt(a.x,a.y);e&&this.units.get(e.id)?.placeAt(e.x,e.y);break}case`item`:this.sfx(`item`,.6)}r>0&&await this.tw.wait(r)}refreshDanger(){let e=[];for(let t of this.castFx.values())e.push(...t.tiles);this.terrain.layers.danger.set(e)}pickUnit(e){let t=null;for(let[n,r]of this.units){if(!r.root.visible||this.battle.unit(n).gone)continue;let i=e.intersectObject(r.rig.root,!0);i.length&&(!t||i[0].distance<t.d)&&(t={id:n,d:i[0].distance})}return t?.id??null}previewFacing(e,t){let n=this.battle.unit(e),r=this.units.get(e);r&&q(n)&&r.setFacing(tf(n,t))}},oh=null,sh=null,ch=null,lh=new Map,uh=128;function dh(){if(oh)return;let e=document.createElement(`canvas`);e.width=uh,e.height=uh,oh=new cd({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),oh.setSize(uh,uh,!1),oh.outputColorSpace=Rt,sh=new Ir,sh.add(new ss(16777215,5595248,1.6));let t=new Ss(16777215,2.2);t.position.set(1.5,2.5,3),sh.add(t),ch=new ys(30,1,.1,20)}function fh(e,t,n,r,i=!1){let a=`${e}|${t.weapon}|${t.armor}|${n}|${r}|${i}`,o=lh.get(a);if(o)return o;try{dh()}catch{return``}let s=oh,c=sh,l=ch,u=Td[e],d=Rm({classId:u.classId,subclassId:e,weapon:Id(t.weapon).kind,armor:Pd[t.armor]?.kind??`medium`,teamColor:eh[n],seed:r});d.root.rotation.y=.45,c.add(d.root);let f=d.height;i?(l.position.set(.9,f*.62,2.6),l.lookAt(0,f*.5,0)):e===`wolf`?(l.position.set(.7,.75,1.3),l.lookAt(0,.45,.25)):(l.position.set(.45,f*.82,1.35),l.lookAt(0,f*.72,0)),s.render(c,l);let p=s.domElement.toDataURL(`image/png`);return c.remove(d.root),Um(d),lh.set(a,p),p}var ph=[[`Goal`,`Knock out every enemy. Summoned wolves don't count.`],[`Turn order`,`Every unit charges up by its Speed and acts at 100. The strip at the top shows who goes next. Waiting without moving or acting brings your next turn sooner (a full turn costs 100, one of move/act 80, neither 60).`],[`Your turn`,`Move (blue tiles) and Act, in either order. You can undo a move until you act. Then choose which way to face.`],[`Height`,`Striking from above hits harder and more accurately. Bows shoot farther from high ground. Each unit's Jump limits how high it can climb in one step.`],[`Facing`,`Hits from the side deal +15%, from behind +35% and are hard to dodge. Face the danger when you end your turn.`],[`Charged spells`,`Abilities marked Charge go off a few ticks later on the tile you picked. The red tiles show where. Step out of them, or knock the caster out first.`],[`Knockback`,`Shoves and blasts push units a tile. Walls and other units hurt; long drops hurt more; chasms and deep water take a unit out of the battle.`],[`Terrain`,`Water slows you and conducts lightning, thickets give cover from shots, lava burns. Hover a tile to read it.`],[`Surge`,`The gauge under HP fills as you deal and take damage. At 100% the subclass's ultimate ability unlocks.`],[`Knocked out`,`A fallen unit has 3 turns to be revived (Revive, Wakeroot, Miracle) before it's lost for the battle.`],[`Controls`,`Click tiles and buttons. Right-click or Esc goes back. Q/E rotate the camera, the wheel zooms, drag or WASD pans, Tab recenters. Space ends the turn, 1-9 pick abilities, Enter confirms.`]];function mh(e){let t=document.createElement(`div`);t.className=`help`,t.innerHTML=`<div class="help-card">
        <h1>How to play</h1>
        <div class="help-grid">${ph.map(([e,t])=>`<div class="help-k">${e}</div><div class="help-v">${t}</div>`).join(``)}</div>
        <button class="cmd big" data-close>Got it</button>
    </div>`;let n=()=>{t.remove(),window.removeEventListener(`keydown`,r,!0)},r=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.stopPropagation(),n())};t.addEventListener(`click`,e=>{(e.target.closest(`[data-close]`)||e.target===t)&&n()}),window.addEventListener(`keydown`,r,!0),e.appendChild(t)}var hh={attack:`⚔`,aoe:`✸`,heal:`✚`,buff:`▲`,debuff:`▼`,move:`➹`,trap:`⌖`,summon:`🐺`,utility:`◆`},gh=class{opts;battle;view;mode={k:`busy`};el;q=e=>this.el.querySelector(e);hoverTile=null;hoverUnit=null;hoverAbility=null;auto=!1;speed=1;ray=new Bs;down=null;disposed=!1;tense=!1;logLines=[];keyHandler=e=>this.onKey(e);frameFn=e=>this.frame(e);constructor(e){this.opts=e,this.battle=new Wf(e.setup),this.el=document.createElement(`div`),this.el.className=`battle-ui`,this.el.innerHTML=Sh,e.host.appendChild(this.el),this.view=new ah(e.stage,this.battle,this.q(`.overlay-layer`),e.audio),this.q(`.arena-name`).textContent=this.battle.arena.name,e.demo?(this.el.classList.add(`demo`),this.auto=!0):(this.bindInput(),window.addEventListener(`keydown`,this.keyHandler)),e.stage.onFrame(this.frameFn);try{this.speed=Number(localStorage.getItem(`vantage.speed`)??`1`)||1}catch{this.speed=1}this.renderSpeed()}async start(){this.opts.demo||(this.opts.audio.music(`battle`,1.5),this.banner(this.battle.arena.name,`info`,1400));let e=this.battle.start();await this.play(e),await this.loop()}dispose(){this.disposed=!0,window.removeEventListener(`keydown`,this.keyHandler);let e=this.opts.stage;e.listeners=e.listeners.filter(e=>e!==this.frameFn),this.view.dispose(),this.el.remove()}frame(e){this.disposed||(this.view.update(e),this.mode.k===`facing`&&this.placeFacingArrows())}async play(e){e.length&&(await this.view.play(e,{log:e=>this.log(e),turn:()=>this.refresh(),changed:()=>this.refresh()}),this.view.syncAll(),this.checkTense())}async loop(){for(;!this.disposed&&this.battle.winner===null;){let e=this.battle.active();if(!e)break;if(e.ai||this.auto)await this.aiTurn(e);else{this.view.follow=!0,this.view.focusUnit(e.id),this.setMode(this.afterAction(e));return}}this.battle.winner!==null&&!this.disposed&&(this.opts.demo?this.opts.onExit(`rematch`):this.showResults())}async aiTurn(e){this.setMode({k:`busy`}),this.view.tw.speed=this.speed*1.35,this.hint(e.team===0?`${e.name} (auto) is thinking…`:`${e.name} is thinking…`),await this.view.tw.wait(220);let t=Xf(this.battle,e),n=()=>this.battle.turn?.unitId===e.id&&q(e)&&!this.disposed,r=async()=>{if(!t.action||!n())return;let r=t.action;this.announce(e,r),await this.play(r.kind===`ability`?this.battle.act(r.id,r.target.x,r.target.y):this.battle.useItem(r.id,r.target.x,r.target.y))},i=async()=>{t.moveTo&&n()&&await this.play(this.battle.move(t.moveTo.x,t.moveTo.y))};if(t.actFirst?(await r(),await i()):(await i(),await r()),n()&&!this.battle.turn.acted){let t=Xf(this.battle,e);if(t.action){let n=t.action;this.announce(e,n),await this.play(n.kind===`ability`?this.battle.act(n.id,n.target.x,n.target.y):this.battle.useItem(n.id,n.target.x,n.target.y))}}this.battle.turn?.unitId===e.id&&await this.play(this.battle.endTurn(q(e)?cp(this.battle,e):void 0)),this.view.tw.speed=this.speed}announce(e,t){if(t.kind===`ability`&&t.id===`attack`)return;let n=t.kind===`item`?Ud(t.id).name:hd(t.id).name,r=t.kind===`ability`&&hd(t.id).surge;this.banner(n,r?`surge`:e.team===0?`ally`:`enemy`,1100)}afterAction(e){let t=this.battle.turn;return!t||t.unitId!==e.id||!q(e)?{k:`busy`}:t.acted&&(t.moved||hf(e)===0)?{k:`facing`,dir:cp(this.battle,e)}:{k:`menu`}}async exec(e){let t=this.battle.active();if(this.setMode({k:`busy`}),this.view.tw.speed=this.speed,await this.play(e()),this.battle.winner!==null){this.showResults();return}let n=this.battle.active();n&&t&&n.id===t.id?this.setMode(this.afterAction(n)):await this.loop()}async endTurn(e){this.hideFacing(),await this.exec(()=>this.battle.endTurn(e))}checkTense(){let e=this.battle.units.filter(e=>e.team===0&&q(e)&&e.summonerId===null).length,t=this.battle.units.filter(e=>e.team===1&&q(e)&&e.summonerId===null).length,n=this.battle.winner===null&&(e<=2||!(t<=1&&e>=3)&&e<t-1);n!==this.tense&&(this.tense=n,this.opts.audio.music(n?`tense`:`battle`,2))}setMode(e){this.mode=e,e.k!==`facing`&&this.hideFacing(),this.updateOverlays(),this.refresh(),e.k===`facing`&&this.showFacing()}activePlayer(){let e=this.battle.active();return e&&!e.ai&&!this.auto?e:null}useDef(e){let t=this.battle.active();return e.kind===`ability`?hd(e.id):this.battle.itemUse(t,e.id)}updateOverlays(){let e=this.view.terrain.layers;e.move.clear(),e.range.clear(),e.area.clear(),e.path.clear(),e.ally.clear();let t=this.activePlayer(),n=this.mode;if(!t){this.view.terrain.setCursor(this.hoverTile?.x??null,this.hoverTile?.y??0);return}let r=this.battle.turn;if(n.k===`menu`&&!r.moved&&hf(t)>0){let n=xf(this.battle,t),r=[...n.values()].filter(e=>e.canStop&&(e.x!==t.x||e.y!==t.y));e.move.set(r),this.hoverTile&&n.get(this.battle.map.key(this.hoverTile.x,this.hoverTile.y))?.canStop&&e.path.set(Sf(this.battle,n,this.hoverTile.x,this.hoverTile.y).slice(1))}let i=n.k===`target`?n.use:n.k===`abilities`||n.k===`items`?this.hoverAbility:null;if(i){let r=this.useDef(i),a=this.battle.targetsFor(t,r);e.range.set(a,(e,n)=>{let r=this.battle.unitAt(e,n);return r&&r.team===t.team&&q(r)?7012250:16747066});let o=n.k===`target`?n.locked??this.hoverTile:null;if(o&&a.some(e=>e.x===o.x&&e.y===o.y)){let n=r.move===`leap`?Nf(this.battle,{...t,x:o.x,y:o.y},r.area,o,o):Nf(this.battle,t,r.area,t,o);e.area.set(n.length?n:[o])}}let a=n.k===`target`&&n.locked?16769354:16777215;this.view.terrain.setCursor(this.hoverTile?.x??null,this.hoverTile?.y??0,a)}bindInput(){let e=this.opts.stage.canvas;e.oncontextmenu=e=>e.preventDefault(),e.onpointerdown=e=>{this.opts.audio.unlock(),this.down={x:e.clientX,y:e.clientY,moved:!1,button:e.button}},e.onpointermove=e=>{if(this.down){let t=e.clientX-this.down.x,n=e.clientY-this.down.y;if(this.down.moved||Math.hypot(t,n)>6){this.down.moved=!0,this.view.follow=!1,this.opts.stage.panPixels(e.movementX,e.movementY);return}}this.pick(e.clientX,e.clientY)},e.onpointerup=e=>{let t=this.down;this.down=null,t&&!t.moved&&(this.pick(e.clientX,e.clientY),t.button===2?this.back():t.button===0&&this.click())},e.onpointerleave=()=>{this.down=null},e.onwheel=e=>{e.preventDefault(),this.opts.stage.zoomBy(e.deltaY<0?1.12:1/1.12)},this.el.addEventListener(`click`,e=>{let t=e.target.closest(`[data-act]`);t&&!t.classList.contains(`disabled`)&&(this.opts.audio.unlock(),this.button(t.dataset.act,t.dataset.id??``))}),this.el.addEventListener(`mouseover`,e=>{let t=e.target.closest(`[data-hover]`),n=e.target.closest(`[data-unit]`);if(n&&(this.hoverUnit=Number(n.dataset.unit),this.renderPanel()),!t)return;let[r,i]=t.dataset.hover.split(`:`);this.hoverAbility={kind:r,id:i},this.updateOverlays(),this.renderPanel()}),this.el.addEventListener(`mouseout`,e=>{e.target.closest(`[data-hover]`)&&this.hoverAbility&&(this.hoverAbility=null,this.updateOverlays(),this.renderPanel())})}pick(e,t){let n=this.opts.stage.canvas.getBoundingClientRect(),r=new I((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.ray.setFromCamera(r,this.opts.stage.camera);let i=null,a=this.view.pickUnit(this.ray);if(a!==null){let e=this.battle.unit(a);i={x:e.x,y:e.y}}else{let e=this.ray.intersectObject(this.view.terrain.pickMesh,!1);e.length&&(i=this.view.terrain.tileFromHit(e[0]))}if(i&&this.hoverTile&&i.x===this.hoverTile.x&&i.y===this.hoverTile.y||!i&&!this.hoverTile)return;this.hoverTile=i;let o=i?this.battle.unitAt(i.x,i.y):void 0;if(this.hoverUnit=o?o.id:null,this.mode.k===`facing`&&i){let e=this.battle.active();e&&(i.x!==e.x||i.y!==e.y)&&(this.mode.dir=tf(e,i),this.view.previewFacing(e.id,i),this.renderFacing())}this.updateOverlays(),this.renderPanel()}async click(){let e=this.activePlayer(),t=this.hoverTile,n=this.mode;if(e&&t){if(n.k===`menu`){if(!this.battle.turn.moved&&xf(this.battle,e).get(this.battle.map.key(t.x,t.y))?.canStop&&(t.x!==e.x||t.y!==e.y)){this.opts.audio.sfx(`uiSelect`),await this.exec(()=>this.battle.move(t.x,t.y));return}}else if(n.k===`target`){let r=this.useDef(n.use);if(!this.battle.targetsFor(e,r).some(e=>e.x===t.x&&e.y===t.y)){this.opts.audio.sfx(`uiError`);return}if(n.locked&&n.locked.x===t.x&&n.locked.y===t.y){await this.confirmTarget();return}this.opts.audio.sfx(`uiMove`),this.setMode({k:`target`,use:n.use,locked:{x:t.x,y:t.y}})}else n.k===`facing`&&(t.x===e.x&&t.y===e.y?await this.endTurn(n.dir):await this.endTurn(tf(e,t)))}}async confirmTarget(){let e=this.mode,t=this.activePlayer();if(e.k!==`target`||!e.locked||!t)return;let n=e.locked;this.opts.audio.sfx(`uiSelect`),this.announce(t,e.use),await this.exec(()=>e.use.kind===`ability`?this.battle.act(e.use.id,n.x,n.y):this.battle.useItem(e.use.id,n.x,n.y))}back(){let e=this.mode;if(e.k===`target`)this.opts.audio.sfx(`uiCancel`),e.locked&&hd(e.use.kind===`ability`?e.use.id:`attack`).target!==`self`?this.setMode({k:`target`,use:e.use,locked:null}):this.setMode({k:e.use.kind===`item`?`items`:`abilities`});else if(e.k===`abilities`||e.k===`items`)this.opts.audio.sfx(`uiCancel`),this.setMode({k:`menu`});else if(e.k===`facing`){let e=this.activePlayer(),t=this.battle.turn;e&&t&&!(t.acted&&t.moved)&&(this.opts.audio.sfx(`uiCancel`),this.view.syncAll(),this.setMode({k:`menu`}))}else if(e.k===`menu`){let e=this.battle.turn;e?.moved&&e.canUndo&&!e.acted&&this.button(`undo`,``)}}async button(e,t){let n=this.activePlayer();switch(e){case`speed`:this.speed=this.speed>=3?1:this.speed+1;try{localStorage.setItem(`vantage.speed`,String(this.speed))}catch{}this.renderSpeed();return;case`auto`:this.auto=!this.auto,this.q(`[data-act=auto]`).classList.toggle(`on`,this.auto),this.auto&&this.mode.k!==`busy`&&this.mode.k!==`over`&&(this.hideFacing(),await this.loop());return;case`rotl`:this.opts.stage.rotate(-1);return;case`rotr`:this.opts.stage.rotate(1);return;case`mute`:this.opts.audio.setMuted(!this.opts.audio.muted),this.q(`[data-act=mute]`).textContent=this.opts.audio.muted?`🔇`:`🔊`;return;case`log`:this.q(`.hud-log`).classList.toggle(`open`);return;case`help`:mh(this.el);return;case`quit`:this.opts.onExit(`muster`);return;case`rematch`:this.opts.onExit(`rematch`);return;case`muster`:this.opts.onExit(`muster`);return}if(!n)return;let r=this.battle.turn;switch(e){case`act`:this.opts.audio.sfx(`uiMove`),this.setMode({k:`abilities`});return;case`items`:this.opts.audio.sfx(`uiMove`),this.setMode({k:`items`});return;case`wait`:this.opts.audio.sfx(`uiMove`),this.setMode({k:`facing`,dir:cp(this.battle,n)});return;case`undo`:r.canUndo&&r.moved&&!r.acted&&(this.opts.audio.sfx(`uiCancel`),await this.exec(()=>this.battle.undoMove()));return;case`back`:this.back();return;case`use`:{let e={kind:this.mode.k===`items`?`item`:`ability`,id:t};if(!(e.kind===`ability`?this.battle.canUse(n,t):this.battle.canUseItem(n,t)).ok){this.opts.audio.sfx(`uiError`);return}this.opts.audio.sfx(`uiSelect`);let r=this.useDef(e).target===`self`;this.setMode({k:`target`,use:e,locked:r?{x:n.x,y:n.y}:null});return}case`confirm`:await this.confirmTarget();return;case`face`:await this.endTurn(Number(t));return}}onKey(e){if(this.disposed)return;let t=e.key.toLowerCase();if(t===`q`)this.opts.stage.rotate(-1);else if(t===`e`)this.opts.stage.rotate(1);else if(t===`escape`)this.back();else if(t===`tab`){e.preventDefault();let t=this.battle.active();t&&(this.view.follow=!0,this.view.focusUnit(t.id))}else if(t===`enter`||t===` `)e.preventDefault(),this.mode.k===`target`&&this.mode.locked?this.confirmTarget():this.mode.k===`facing`?this.endTurn(this.mode.dir):this.mode.k===`menu`&&t===` `&&this.button(`wait`,``);else if([`w`,`a`,`s`,`d`].includes(t)){let e=.8;this.view.follow=!1,t===`w`&&this.opts.stage.pan(0,e),t===`s`&&this.opts.stage.pan(0,-.8),t===`a`&&this.opts.stage.pan(-.8,0),t===`d`&&this.opts.stage.pan(e,0)}else if(t.startsWith(`arrow`)&&this.mode.k===`facing`){e.preventDefault();let n=t===`arrowleft`?-1:+(t===`arrowright`),r=t===`arrowup`?-1:+(t===`arrowdown`),i=this.opts.stage.gridDirForScreen(n,r);this.mode.dir=i;let a=this.battle.active();a&&this.view.units.get(a.id)?.setFacing(i),this.renderFacing()}else if(/^[1-9]$/.test(t)&&(this.mode.k===`abilities`||this.mode.k===`items`)){let e=(this.mode.k===`abilities`?Gf(this.battle.active()):this.pouchIds())[Number(t)-1];e&&this.button(`use`,e)}else t===`m`&&this.mode.k===`menu`||t===`f`&&this.mode.k===`menu`&&this.button(`act`,``)}showFacing(){let e=this.q(`.facing`);e.style.display=`block`,this.renderFacing(),this.placeFacingArrows()}hideFacing(){let e=this.q(`.facing`);e&&(e.style.display=`none`)}renderFacing(){if(this.mode.k!==`facing`)return;let e=this.mode.dir;this.el.querySelectorAll(`.facing [data-act=face]`).forEach(t=>t.classList.toggle(`sel`,Number(t.dataset.id)===e));let t=this.battle.active();t&&this.view.units.get(t.id)?.setFacing(e)}placeFacingArrows(){let e=this.battle.active();if(!e)return;let t=this.view.units.get(e.id);if(!t)return;let n=t.root.position;this.el.querySelectorAll(`.facing [data-act=face]`).forEach(e=>{let t=Zd[Number(e.dataset.id)],r=this.opts.stage.project(new L(n.x+t.dx*.95,n.y+.1,n.z+t.dy*.95)),i=this.opts.stage.project(n),a=Math.atan2(r.y-i.y,r.x-i.x);e.style.transform=`translate(${r.x}px, ${r.y}px) translate(-50%, -50%) rotate(${a}rad)`})}refresh(){this.disposed||(this.renderTimeline(),this.renderActive(),this.renderMenu(),this.renderPanel(),this.renderHint())}portraitOf(e){return fh(e.subclassId,e.gear,e.team,e.seed)}renderTimeline(){let e=this.battle.timeline(11);this.q(`.timeline`).innerHTML=e.map(e=>{if(e.kind===`cast`){let t=hd(e.ability),n=this.battle.unit(e.casterId);return`<div class="tl cast team${n.team}" title="${t.name} (${n.name}) goes off"><span>${hh[t.tag]??`✦`}</span><b>${t.name}</b></div>`}let t=this.battle.unit(e.unitId);return`<div class="tl team${t.team}${e.active?` active`:``}${e.ko?` ko`:``}" data-unit="${t.id}" title="${t.name}"><img src="${this.portraitOf(t)}" alt=""/>${e.ko?`<i>${t.koTimer}</i>`:``}</div>`}).join(``)}renderActive(){let e=this.battle.active(),t=this.q(`.active-card`);e?(t.innerHTML=vh(e,this.portraitOf(e),!0),t.className=`active-card team${e.team}`):t.innerHTML=``}pouchIds(){let e=this.battle.active();if(!e)return[];let t=this.battle.pouches[e.team];return Object.keys(Hd).filter(e=>(t[e]??0)>0)}renderMenu(){let e=this.q(`.menu`),t=this.q(`.submenu`),n=this.activePlayer(),r=this.mode;if(!n||r.k===`busy`||r.k===`over`){e.innerHTML=``,t.innerHTML=``,t.style.display=`none`;return}let i=this.battle.turn,a=!i.acted&&this.pouchIds().some(e=>this.battle.canUseItem(n,e).ok),o=(e,t,n,r=``)=>`<button data-act="${e}" class="cmd${n?``:` disabled`}${r}">${t}</button>`,s=i.moved?`Moved`:hf(n)===0?`Rooted`:`Move: click a blue tile`;if(e.innerHTML=[`<div class="cmd info${i.moved||hf(n)===0?` disabled`:``}">${s}</div>`,o(`act`,`Act <kbd>F</kbd>`,!i.acted||!i.moved&&Gf(n).some(e=>hd(e).usesMove&&this.battle.canUse(n,e).ok),r.k===`abilities`||r.k===`target`?` open`:``),o(`items`,`Item`,a,r.k===`items`?` open`:``),i.moved&&i.canUndo&&!i.acted?o(`undo`,`Undo move`,!0):``,o(`wait`,i.acted||i.moved?`End turn <kbd>Space</kbd>`:`Wait <kbd>Space</kbd>`,!0)].join(``),r.k===`abilities`||r.k===`target`&&r.use.kind===`ability`)t.style.display=`block`,t.innerHTML=`<div class="sub-title">Abilities <span>${n.mp}/${n.stats.mp} MP</span></div>`+Gf(n).map((e,t)=>{let i=hd(e),a=this.battle.canUse(n,e),o=i.surge?`<em class="surge">Surge</em>`:i.mp?`${vf(n,i.mp)} MP`:``,s=i.castTime?`<em class="ct">Charge ${i.castTime}</em>`:``,c=r.k===`target`&&r.use.id===e?` sel`:``;return`<div class="ab${a.ok?``:` disabled`}${i.surge?` surge-row`:``}${c}" data-act="use" data-id="${e}" data-hover="ability:${e}">
                    <span class="ic">${hh[i.tag]??`◆`}</span><span class="nm"><kbd>${t+1}</kbd>${i.name}</span>
                    <span class="meta">${o}${s}<em>${Kf(n,e)}</em></span>
                    ${a.ok?``:`<span class="why">${a.reason}</span>`}</div>`}).join(``)+`<button class="cmd back" data-act="back">Back <kbd>Esc</kbd></button>`;else if(r.k===`items`||r.k===`target`&&r.use.kind===`item`){t.style.display=`block`;let e=this.pouchIds();t.innerHTML=`<div class="sub-title">Pouch</div>`+(e.length?e.map((e,t)=>{let i=Ud(e),a=this.battle.canUseItem(n,e),o=r.k===`target`&&r.use.id===e?` sel`:``;return`<div class="ab${a.ok?``:` disabled`}${o}" data-act="use" data-id="${e}" data-hover="item:${e}">
                    <span class="ic">◍</span><span class="nm"><kbd>${t+1}</kbd>${i.name}</span><span class="meta"><em>x${this.battle.pouches[n.team][e]}</em></span>
                    ${a.ok?``:`<span class="why">${a.reason}</span>`}</div>`}).join(``):`<div class="empty">The pouch is empty.</div>`)+`<button class="cmd back" data-act="back">Back <kbd>Esc</kbd></button>`}else t.style.display=`none`,t.innerHTML=``}renderPanel(){let e=this.q(`.panel`),t=this.mode,n=this.activePlayer();if(n&&t.k===`target`){let r=this.useDef(t.use),i=t.locked??this.hoverTile,a=i&&this.battle.targetsFor(n,r).some(e=>e.x===i.x&&e.y===i.y),o=t.use.kind===`ability`?hd(t.use.id).name:Ud(t.use.id).name,s=`<div class="pv-desc">${t.use.kind===`ability`?bh(n,t.use.id):Ud(t.use.id).desc}</div>`;if(i&&a){let e=this.battle.preview(n,r,i,t.use.kind===`ability`?t.use.id:`item:${t.use.id}`);s+=e.length?e.map(e=>xh(e,this.portraitOf(e.unit))).join(``):`<div class="pv-none">No one is affected here.</div>`,t.locked?s+=`<button class="cmd confirm" data-act="confirm">Confirm <kbd>Enter</kbd></button><div class="pv-tip">or click the tile again</div>`:s+=`<div class="pv-tip">Click to select, click again to confirm.</div>`}else s+=`<div class="pv-tip">Pick a highlighted tile. Right-click to go back.</div>`;e.innerHTML=`<div class="pv-title">${o}</div>${s}`,e.style.display=`block`;return}if(n&&(t.k===`abilities`||t.k===`items`)&&this.hoverAbility){let t=this.hoverAbility;e.innerHTML=`<div class="pv-title">${t.kind===`ability`?hd(t.id).name:Ud(t.id).name}</div><div class="pv-desc">${t.kind===`ability`?bh(n,t.id):Ud(t.id).desc}</div>`,e.style.display=`block`;return}let r=this.hoverUnit;if(r!==null){let t=this.battle.unit(r);e.innerHTML=vh(t,this.portraitOf(t),!1)+yh(t),e.style.display=`block`}else if(this.hoverTile){let t=this.battle.map.at(this.hoverTile.x,this.hoverTile.y),n=Jd[t.terrain],r=t.effects.filter(e=>!e.hidden||e.team===0).map(e=>`<div class="tile-fx">${Kd[e.id].name}: ${Kd[e.id].desc}</div>`).join(``);e.innerHTML=`<div class="pv-title">${n.name} <span class="dim">height ${t.h}</span></div><div class="pv-desc">${n.desc}</div>${r}`,e.style.display=`block`}else e.style.display=`none`}renderHint(){let e=this.mode;if(!this.activePlayer())return;let t=this.battle.turn,n=``;e.k===`menu`?n=t.moved?`Act, or end the turn.`:`Click a blue tile to move, or Act first. Q/E rotate, wheel zooms, drag to pan.`:e.k===`abilities`?n=`Choose an ability. Hover one to see its range.`:e.k===`items`?n=`Choose an item.`:e.k===`target`?n=`Select a target. Right-click or Esc to go back.`:e.k===`facing`&&(n=`Pick a facing: click an arrow, a tile, or use the arrow keys, then Enter. Your back takes extra damage.`),this.hint(n)}renderSpeed(){let e=this.q(`[data-act=speed]`);e&&(e.textContent=`${this.speed}x`),this.view.tw.speed=this.speed}hint(e){this.q(`.hud-hint`).textContent=e}log(e){this.logLines.push(e),this.logLines.length>80&&this.logLines.shift();let t=this.q(`.hud-log .lines`);t.innerHTML=this.logLines.slice(-40).map(e=>`<div>${e}</div>`).join(``),t.scrollTop=t.scrollHeight}banner(e,t,n){let r=this.q(`.banner`);r.textContent=e,r.className=`banner show ${t}`,clearTimeout(r._t),r._t=window.setTimeout(()=>r.className=`banner ${t}`,n/Math.max(1,this.speed*.8))}showResults(){if(this.mode.k===`over`)return;this.setMode({k:`over`}),this.q(`.banner`).className=`banner`;let e=this.battle.winner===0,t=this.battle.units.filter(e=>e.team===0&&e.summonerId===null),n=this.battle.units.filter(e=>e.team===1&&e.summonerId===null),r=e=>`<div class="res-unit${q(e)?``:` down`}"><img src="${this.portraitOf(e)}"/><span>${e.name}</span><em>${Td[e.subclassId].name}</em><b>${e.gone?`Lost`:e.ko?`Down`:`${e.hp}/${e.stats.hp}`}</b></div>`,i=this.q(`.results`);i.innerHTML=`<div class="res-card ${e?`won`:`lost`}">
            <h1>${e?`Victory`:`Defeat`}</h1>
            <p>${this.battle.arena.name} · ${this.battle.turnCount} turns</p>
            <div class="res-cols"><div><h3>Your squad</h3>${t.map(r).join(``)}</div><div><h3>Opponents</h3>${n.map(r).join(``)}</div></div>
            <div class="res-buttons"><button class="cmd big" data-act="rematch">Rematch</button><button class="cmd big" data-act="muster">Back to the muster</button></div>
        </div>`,i.style.display=`flex`,this.hint(``)}};function _h(e,t,n,r){return`<div class="bar ${e}"><div class="fill" style="width:${Math.max(0,Math.min(100,t/Math.max(1,n)*100))}%"></div><span>${r}</span></div>`}function vh(e,t,n){let r=Td[e.subclassId],i=Cd[e.classId],a=e.statuses.filter(e=>e.id!==`airborne`).map(e=>{let t=Gd[e.id];return`<span class="chip ${t.kind}" title="${t.name}: ${t.desc}" style="--c:${t.color}">${t.glyph} ${t.name}${e.id===`barrier`?` ${e.value??0}`:``}<i>${e.turns}</i></span>`}).join(``);return`<div class="card team${e.team}${n?` is-active`:``}">
        <img class="portrait" src="${t}" alt=""/>
        <div class="card-main">
            <div class="card-name">${e.name}${e.summonerId===null?` <span class="dim">${r.name} · ${i.name}</span>`:``}</div>
            ${e.ko?`<div class="ko-note">${e.gone?`Lost`:`Down: ${e.koTimer} turn${e.koTimer===1?``:`s`} to revive`}</div>`:``}
            ${_h(`hp`,e.hp,e.stats.hp,`HP ${e.hp}/${e.stats.hp}`)}
            ${_h(`mp`,e.mp,e.stats.mp,`MP ${e.mp}/${e.stats.mp}`)}
            ${_h(`surge${e.surge>=100?` full`:``}`,e.surge,100,e.surge>=100?`SURGE READY: ${hd(e.surgeAbility).name}`:`Surge ${Math.floor(e.surge)}%`)}
            <div class="chips">${a}</div>
        </div>
    </div>`}function yh(e){let t=e.stats,n=Id(e.gear.weapon),r=Ld(e.gear.armor),i=[e.gear.acc1,e.gear.acc2].filter(e=>!!e).map(e=>Rd(e)),a=[...new Set(e.passives)].map(e=>Ed[e]).filter(Boolean),o=Object.entries(e.resist).filter(([,e])=>e!==0).map(([e,t])=>`${e} ${t>0?`-`:`+`}${Math.abs(t)}%`).join(`, `);return`<div class="stats">
        <span>ATK <b>${t.atk}</b></span><span>MAG <b>${t.mag}</b></span><span>DEF <b>${t.def}</b></span><span>RES <b>${t.res}</b></span>
        <span>SPD <b>${t.spd}</b></span><span>MOVE <b>${t.move}</b></span><span>JUMP <b>${t.jump}</b></span><span>EVA <b>${t.eva}</b></span>
        <span>CRIT <b>${t.crit}%</b></span><span>CT <b>${Math.floor(e.ct)}</b></span>
    </div>
    <div class="gear-line"><b>${n.name}</b> <span class="dim">${kd[n.kind].label}</span> · <b>${r.name}</b>${i.map(e=>` · <b>${e.name}</b>`).join(``)}</div>
    ${o?`<div class="gear-line dim">Damage taken: ${o}</div>`:``}
    <div class="passives">${a.map(e=>`<div><b>${e.name}</b> ${e.desc}</div>`).join(``)}</div>`}function bh(e,t){let n=hd(t),r=[];return n.mp&&r.push(`${vf(e,n.mp)} MP`),n.cooldown&&r.push(`cooldown ${n.cooldown}`),n.castTime&&r.push(`charge ${n.castTime}`),r.push(Kf(e,t)),`${t===`attack`?`Attack with ${Id(e.gear.weapon).name}. ${Id(e.gear.weapon).desc}`:n.desc}<div class="dim">${r.join(` · `)}</div>`}function xh(e,t){let n=e.unit,r=[];if(e.negated)r.push(`<span class="good">Negated by Spellguard</span>`);else if(e.hits>0){let t=e.dmgMin>=n.hp?` <span class="ko">KO</span>`:e.dmgMax>=n.hp?` <span class="ko maybe">KO?</span>`:``;r.push(`<span class="dmg">${e.dmgMin}-${e.dmgMax}${e.hits>1?` (${e.hits} hits)`:``}</span>${t}`),r.push(`<span class="hit">${e.hit}% hit</span>`),e.crit>0&&r.push(`<span class="crit">${e.crit}% crit</span>`),e.back?r.push(`<span class="tag">Back</span>`):e.side&&r.push(`<span class="tag">Side</span>`)}e.heal>0&&r.push(`<span class="heal">+${Math.min(e.heal,n.stats.hp-n.hp)} HP</span>`),e.revive&&r.push(`<span class="heal">Revive</span>`);for(let t of e.statuses)r.push(`<span class="st" style="--c:${Gd[t.id].color}">${Gd[t.id].name} ${t.chance}%</span>`);e.knockback&&r.push(`<span class="tag">Knockback</span>`);let i=e.ally&&e.hits>0?` friendly`:``;return`<div class="pv-row team${n.team}${i}"><img src="${t}"/><div><div class="pv-name">${n.name} <span class="dim">${n.hp}/${n.stats.hp}</span>${i?` <span class="ff">Friendly fire!</span>`:``}</div><div class="pv-parts">${r.join(` `)}</div></div></div>`}var Sh=`
<div class="overlay-layer"></div>
<div class="hud-top"><div class="timeline"></div></div>
<div class="hud-tl"><div class="arena-name"></div><div class="dim small">Turn order →</div></div>
<div class="hud-tr">
    <button data-act="rotl" title="Rotate left (Q)">⟲</button><button data-act="rotr" title="Rotate right (E)">⟳</button>
    <button data-act="speed" title="Animation speed">1x</button><button data-act="auto" title="Let the AI play your side">Auto</button>
    <button data-act="mute" title="Sound">🔊</button><button data-act="log" title="Battle log">Log</button><button data-act="help" title="How to play">?</button><button data-act="quit" title="Leave the battle">✕</button>
</div>
<div class="hud-log"><div class="lines"></div></div>
<div class="hud-bl"><div class="active-card"></div><div class="menu"></div></div>
<div class="submenu"></div>
<div class="panel"></div>
<div class="hud-hint"></div>
<div class="facing">
    <button data-act="face" data-id="0">➜</button><button data-act="face" data-id="1">➜</button>
    <button data-act="face" data-id="2">➜</button><button data-act="face" data-id="3">➜</button>
</div>
<div class="banner"></div>
<div class="results"></div>
`,Ch=`Aldric.Brenna.Cassian.Dara.Edrin.Fenna.Garrick.Hollis.Isolde.Jory.Kestrel.Liora.Maddox.Nessa.Orrin.Perrin.Quill.Rowan.Sable.Tamsin.Ulric.Vesper.Wren.Yara.Zeke.Ash.Briar.Corin.Dell.Ember.Faye.Gideon.Hale.Ivo.Juno.Kael.Lark.Mira.Nyle.Oona.Pike.Rhea.Soren.Thea.Vale.Wynn`.split(`.`),wh=[{id:`balanced`,name:`Ashgate Regulars`,desc:`A bit of everything: a wall, a sniper, fire, a healer and a knife.`,members:[{subclassId:`vanguard`},{subclassId:`marksman`},{subclassId:`pyromancer`},{subclassId:`oracle`},{subclassId:`assassin`}],pouch:{...Wd}},{id:`ironwall`,name:`The Iron Wall`,desc:`Heavy armor and holy ground. Slow, stubborn, very hard to kill.`,members:[{subclassId:`vanguard`,gear:{armor:`bastionPlate`}},{subclassId:`templar`},{subclassId:`lancer`},{subclassId:`oracle`},{subclassId:`trapper`}],pouch:{draught:4,greaterDraught:1,panacea:1,wakeroot:1,ironbark:1}},{id:`glass`,name:`Glass Cannons`,desc:`Three casters and a sniper. Everything dies fast, including them.`,members:[{subclassId:`pyromancer`},{subclassId:`stormcaller`},{subclassId:`marksman`,gear:{weapon:`ridgeLongbow`}},{subclassId:`hexer`},{subclassId:`duelist`}],pouch:{manaTonic:3,draught:2,wakeroot:1,quicksilver:1,firebomb:1}},{id:`hunt`,name:`The Wild Hunt`,desc:`A beastmaster and its wolf, a berserker, traps, and a healer to patch them up.`,members:[{subclassId:`beastmaster`},{subclassId:`berserker`,gear:{weapon:`gutripper`}},{subclassId:`trapper`},{subclassId:`duelist`},{subclassId:`oracle`}],pouch:{...Wd}},{id:`frost`,name:`Frost and Steel`,desc:`Freeze them, then break them. A cryomancer leads a lance, a templar and a bomb-thrower.`,members:[{subclassId:`cryomancer`},{subclassId:`lancer`,gear:{weapon:`skyreachPike`}},{subclassId:`templar`},{subclassId:`saboteur`},{subclassId:`vanguard`}],pouch:{draught:2,firebomb:3,wakeroot:1,panacea:1}},{id:`shadow`,name:`The Shadow Court`,desc:`Curses, poison and knives in the dark.`,members:[{subclassId:`hexer`},{subclassId:`assassin`,gear:{weapon:`widowsFang`}},{subclassId:`saboteur`},{subclassId:`duelist`,gear:{weapon:`parryingBlade`}},{subclassId:`stormcaller`}],pouch:{draught:3,panacea:2,firebomb:2,quicksilver:1}}];function Th(e){let t=wh.find(t=>t.id===e);if(!t)throw Error(`unknown squad ${e}`);return t}function Eh(e,t,n=e.members.length){let r=new Tf(t),i=[...Ch];return e.members.slice(0,n).map(e=>{let t=i.splice(r.int(0,i.length-1),1)[0],n=Td[e.subclassId].defaultGear;return{name:t,subclassId:e.subclassId,gear:{...n,...e.gear}}})}var Dh=`vantage.muster.v1`,Oh=6,kh=2;function Ah(){let e=Th(`balanced`);return{squad:Eh(e,7),pouch:{...e.pouch},arenaId:`colosseum`,opponent:`random`,selected:0}}function jh(){try{let e=localStorage.getItem(Dh);if(e){let t=JSON.parse(e);if(Array.isArray(t.squad)&&t.squad.length&&t.squad.every(e=>Td[e.subclassId]&&Nd[e.gear.weapon]&&Pd[e.gear.armor]))return t.selected=Math.min(t.selected??0,t.squad.length-1),bd.some(e=>e.id===t.arenaId)||(t.arenaId=`colosseum`),t}}catch{}return Ah()}function Mh(e){try{localStorage.setItem(Dh,JSON.stringify(e))}catch{}}function Nh(e){return Object.entries(e).reduce((e,[t,n])=>e+(Hd[t]?.cost??0)*n,0)}function Ph(e,t){let n=new Tf(t),r,i;if(e.opponent===`mirror`){let t=[...Ch].sort(()=>n.next()-.5);r=e.squad.map((e,n)=>({...e,name:t[n],gear:{...e.gear}})),i={...e.pouch}}else if(e.opponent===`random`){let t=Object.values(Td).filter(e=>e.id!==`wolf`),a=[...Ch].sort(()=>n.next()-.5);r=e.squad.map((e,r)=>{let i=n.pick(t);return{name:a[r],subclassId:i.id,gear:{...i.defaultGear}}}),i={...n.pick(wh).pouch}}else{let n=Th(e.opponent);for(r=Eh(n,t+3,Math.min(n.members.length,Math.max(e.squad.length,3)));r.length<e.squad.length;){let e=n.members[r.length%n.members.length];r.push({name:Ch[(t+r.length*5)%Ch.length],subclassId:e.subclassId,gear:{...Td[e.subclassId].defaultGear,...e.gear}})}i={...n.pouch}}return{arenaId:e.arenaId,seed:t,teams:[{units:e.squad.map(e=>({...e,gear:{...e.gear}})),pouch:{...e.pouch},ai:!1},{units:r,pouch:i,ai:!0}]}}var Fh=class{host;state;audio;onFight;el;constructor(e,t,n,r){this.host=e,this.state=t,this.audio=n,this.onFight=r,this.el=document.createElement(`div`),this.el.className=`muster`,e.appendChild(this.el),this.el.addEventListener(`click`,e=>this.onClick(e)),this.el.addEventListener(`change`,e=>this.onChange(e)),this.el.addEventListener(`input`,e=>{let t=e.target;if(t.dataset.field===`name`){this.cur().name=t.value.slice(0,16)||`Nameless`,Mh(this.state);let e=this.el.querySelector(`.roster [data-idx="${this.state.selected}"] .r-name`);e&&(e.textContent=this.cur().name)}}),this.render()}dispose(){this.el.remove()}cur(){return this.state.squad[this.state.selected]}onClick(e){let t=e.target.closest(`[data-a]`);if(!t||t.classList.contains(`disabled`))return;this.audio.unlock();let n=t.dataset.a,r=t.dataset.v??``,i=this.state;switch(n){case`sel`:i.selected=Number(r);break;case`add`:{if(i.squad.length>=Oh)return;let e=new Set(i.squad.map(e=>e.name)),t=Ch.find(t=>!e.has(t))??`Recruit`;i.squad.push({name:t,subclassId:`vanguard`,gear:{...Td.vanguard.defaultGear}}),i.selected=i.squad.length-1;break}case`remove`:if(i.squad.length<=kh)return;i.squad.splice(Number(r),1),i.selected=Math.min(i.selected,i.squad.length-1);break;case`class`:{let e=Dd(r)[0];this.setSubclass(e.id);break}case`sub`:this.setSubclass(r);break;case`arena`:i.arenaId=r;break;case`item+`:{let e=Hd[r];if(Nh(i.pouch)+e.cost>12){this.audio.sfx(`uiError`);return}i.pouch[r]=(i.pouch[r]??0)+1;break}case`item-`:(i.pouch[r]??0)>0&&i.pouch[r]--,i.pouch[r]===0&&delete i.pouch[r];break;case`preset`:{let e=Th(r);i.squad=Eh(e,Date.now()%1e4),i.pouch={...e.pouch},i.selected=0;break}case`fight`:Mh(i),this.audio.sfx(`uiSelect`),this.onFight(i);return;default:return}this.audio.sfx(`uiMove`,{volume:.6}),Mh(i),this.render()}onChange(e){let t=e.target,n=t.dataset.field;if(!n)return;let r=this.cur().gear;n===`weapon`?r.weapon=t.value:n===`armor`?r.armor=t.value:n===`acc1`?r.acc1=t.value||null:n===`acc2`?r.acc2=t.value||null:n===`opponent`&&(this.state.opponent=t.value),this.cur().gear=uf(this.cur().subclassId,r),Mh(this.state),this.audio.sfx(`uiMove`,{volume:.6}),this.render()}setSubclass(e){let t=this.cur();if(t.subclassId===e)return;let n={acc1:t.gear.acc1,acc2:t.gear.acc2};t.subclassId=e,t.gear=uf(e,{...Td[e].defaultGear,...n.acc1||n.acc2?n:{}})}render(){let e=this.state,t=this.cur(),n=Td[t.subclassId],r=Cd[n.classId],{stats:i,resist:a,passives:o}=af(t.subclassId,t.gear),s=Nh(e.pouch),c=e.squad.map((t,n)=>`
            <div class="r-card${n===e.selected?` sel`:``}" data-a="sel" data-v="${n}" data-idx="${n}">
                <img src="${fh(t.subclassId,t.gear,0,1e3+n)}" alt=""/>
                <div><div class="r-name">${t.name}</div><div class="dim">${Td[t.subclassId].name} · ${Cd[Td[t.subclassId].classId].name}</div></div>
                ${e.squad.length>kh?`<button class="x" data-a="remove" data-v="${n}" title="Remove">✕</button>`:``}
            </div>`).join(``),l=Od.map(e=>`<button class="tab${e===n.classId?` sel`:``}" data-a="class" data-v="${e}">${Cd[e].name}</button>`).join(``),u=Dd(n.classId).map(t=>`
            <div class="sub-card${t.id===n.id?` sel`:``}" data-a="sub" data-v="${t.id}">
                <img src="${fh(t.id,t.defaultGear,0,1e3+e.selected,!0)}" alt=""/>
                <div class="sub-body">
                    <div class="sub-name">${t.name} <span class="role">${t.role}</span></div>
                    <div class="sub-tag">${t.tagline}</div>
                    <div class="sub-desc">${t.desc}</div>
                    <div class="sub-line"><b>Passive:</b> ${Ed[t.passive].name}. ${Ed[t.passive].desc}</div>
                    <div class="sub-line"><b>Surge:</b> ${hd(t.surge).name}</div>
                </div>
            </div>`).join(``),d=(e,t,n,r=!1)=>(r?`<option value=""${t?``:` selected`}>(none)</option>`:``)+e.map(e=>`<option value="${e}"${e===t?` selected`:``}>${n(e)}</option>`).join(``),f=lf(),p=e=>`<div class="gear-desc">${e}</div>`,m=Nd[t.gear.weapon],h=Pd[t.gear.armor],g=`
            <label>Weapon<select data-field="weapon">${d(sf(t.subclassId),t.gear.weapon,e=>`${Nd[e].name} (${Nd[e].kind})`)}</select></label>
            ${p(`${kd[m.kind].label}. ${m.desc}`)}
            <label>Armor<select data-field="armor">${d(cf(t.subclassId),t.gear.armor,e=>`${Pd[e].name} (${Pd[e].kind})`)}</select></label>
            ${p(h.desc)}
            <label>Accessory<select data-field="acc1">${d(f.filter(e=>e!==t.gear.acc2),t.gear.acc1,e=>Fd[e].name,!0)}</select></label>
            ${t.gear.acc1?p(Fd[t.gear.acc1].desc):``}
            <label>Accessory<select data-field="acc2">${d(f.filter(e=>e!==t.gear.acc1),t.gear.acc2,e=>Fd[e].name,!0)}</select></label>
            ${t.gear.acc2?p(Fd[t.gear.acc2].desc):``}`,_=(e,t,n)=>`<div class="st"><span>${e}</span><b>${t}</b>${t===n?``:`<i class="${t>n?`up`:`down`}">${t>n?`+`:``}${t-n}</i>`}</div>`,v=r.base,y=[_(`HP`,i.hp,v.hp),_(`MP`,i.mp,v.mp),_(`ATK`,i.atk,v.atk),_(`MAG`,i.mag,v.mag),_(`DEF`,i.def,v.def),_(`RES`,i.res,v.res),_(`SPD`,i.spd,v.spd),_(`MOVE`,i.move,v.move),_(`JUMP`,i.jump,v.jump),_(`EVA`,i.eva,v.eva),_(`CRIT`,i.crit,v.crit)].join(``),b=Object.entries(a).filter(([,e])=>e!==0).map(([e,t])=>`${e} ${t>0?`-`:`+`}${Math.abs(t)}%`).join(`, `),x=[`attack`,...n.abilities,...r.abilities,n.surge].map(e=>{let t=hd(e),i=[t.surge?`Surge`:t.mp?`${t.mp} MP`:``,t.castTime?`charge ${t.castTime}`:``,t.cooldown?`cd ${t.cooldown}`:``].filter(Boolean).join(` · `),a=n.abilities.includes(e)?n.name:r.abilities.includes(e)?r.name:e===`attack`?`Weapon`:`Surge`;return`<div class="kit-row${t.surge?` surge`:``}"><div><b>${t.name}</b> <span class="dim">${a}${i?` · ${i}`:``}</span></div><div class="kit-desc">${e===`attack`?`${kd[m.kind].label}. ${m.desc}`:t.desc}</div></div>`}).join(``),S=[...new Set(o)].map(e=>Ed[e]).map(e=>`<div class="kit-row"><b>${e.name}</b> <span class="kit-desc">${e.desc}</span></div>`).join(``),C=bd.map(t=>`<div class="arena-card${t.id===e.arenaId?` sel`:``}" data-a="arena" data-v="${t.id}"><b>${t.name}</b><span>${t.desc}</span></div>`).join(``),w=[`<option value="random"${e.opponent===`random`?` selected`:``}>Random squad</option>`,`<option value="mirror"${e.opponent===`mirror`?` selected`:``}>Mirror match (your squad)</option>`].concat(wh.map(t=>`<option value="${t.id}"${e.opponent===t.id?` selected`:``}>${t.name}</option>`)).join(``),T=e.opponent===`random`?`A random line-up the size of yours.`:e.opponent===`mirror`?`Your own squad, same gear. Who plays it better?`:Th(e.opponent).desc,E=Object.values(Hd).map(t=>`
            <div class="item-row"><div><b>${t.name}</b> <span class="dim">${t.cost} pt</span><div class="dim small">${t.desc}</div></div>
            <div class="stepper"><button data-a="item-" data-v="${t.id}" class="${(e.pouch[t.id]??0)>0?``:`disabled`}">−</button><span>${e.pouch[t.id]??0}</span><button data-a="item+" data-v="${t.id}" class="${s+t.cost<=12?``:`disabled`}">+</button></div></div>`).join(``),D=wh.map(e=>`<button class="preset" data-a="preset" data-v="${e.id}" title="${e.desc}">${e.name}</button>`).join(``);this.el.innerHTML=`
        <header><div class="logo">VANTAGE</div><div class="dim">Muster your squad</div><button class="cmd big fight" data-a="fight">Fight!</button></header>
        <div class="cols">
            <section class="roster">
                <h2>Squad <span class="dim">${e.squad.length}/${Oh}</span></h2>
                ${c}
                ${e.squad.length<Oh?`<button class="cmd add" data-a="add">+ Recruit</button>`:``}
                <h3>Presets</h3><div class="presets">${D}</div>
            </section>
            <section class="editor">
                <div class="ed-head"><input data-field="name" value="${t.name}" maxlength="16"/><span class="dim">${r.desc}</span></div>
                <div class="tabs">${l}</div>
                <div class="subs">${u}</div>
                <div class="ed-cols">
                    <div class="gear">${g}</div>
                    <div class="statbox"><div class="stat-grid">${y}</div>${b?`<div class="dim small">Damage taken: ${b}</div>`:``}<h4>Kit</h4>${x}<h4>Passives</h4>${S}</div>
                </div>
            </section>
            <section class="setup">
                <h2>Arena</h2><div class="arenas">${C}</div>
                <h2>Opponent</h2><select data-field="opponent">${w}</select><div class="dim small">${T}</div>
                <h2>Pouch <span class="dim">${s}/12 pts</span></h2><div class="items">${E}</div>
            </section>
        </div>`}},Ih=new URLSearchParams(location.search),Lh=document.getElementById(`screen`),Rh=document.getElementById(`ui`),zh=new dd(Lh),Bh=new _e,Vh=new _e;Ih.has(`mute`)&&Bh.setMuted(!0);var Hh=null,Uh=null,Wh=null,Gh=null,Kh=jh(),qh=null;function Jh(){let e=Math.floor(Math.random()*1e6),t=wh[e%wh.length],n=wh[(e+1+e%4)%wh.length];return{arenaId:bd[e%bd.length].id,seed:e,teams:[{units:Eh(t,e,4),pouch:{...t.pouch},ai:!0},{units:Eh(n,e+1,4),pouch:{...n.pouch},ai:!0}]}}function Yh(){Xh();let e=document.createElement(`div`);e.className=`demo-host`,Rh.prepend(e),Uh=new gh({setup:Jh(),stage:zh,audio:Vh,host:e,demo:!0,onExit:()=>setTimeout(()=>{Uh&&Yh()},1500)}),Uh.start()}function Xh(){Uh&&=(Uh.dispose(),Rh.querySelector(`.demo-host`)?.remove(),null)}function Zh(){eg(),Yh(),Bh.music(`muster`,1),Gh=document.createElement(`div`),Gh.className=`title`,Gh.innerHTML=`
        <div class="title-card">
            <div class="logo big">VANTAGE</div>
            <div class="tagline">Squad tactics on high ground</div>
            <div class="title-buttons">
                <button class="cmd big" data-t="muster">Muster your squad</button>
                <button class="cmd big ghost" data-t="quick">Quick battle</button>
                <button class="cmd big ghost" data-t="help">How to play</button>
            </div>
            <div class="dim small">Five classes, fifteen subclasses. Height, facing and the turn order decide everything.</div>
        </div>`,Gh.addEventListener(`click`,e=>{let t=e.target.closest(`[data-t]`);t&&(Bh.unlock(),Bh.sfx(`uiSelect`),t.dataset.t===`help`?mh(Rh):t.dataset.t===`muster`?Qh():$h(Ph(Kh,Math.floor(Math.random()*1e6))))}),Rh.appendChild(Gh)}function Qh(){eg(),Uh||Yh(),Bh.music(`muster`,1),Wh=new Fh(Rh,Kh,Bh,e=>{Kh=e,$h(Ph(e,Ih.has(`seed`)?Number(Ih.get(`seed`)):Math.floor(Math.random()*1e6)))})}function $h(e){eg(),Xh(),qh=e,Ih.has(`watch`)&&(e.teams[0].ai=!0),Hh=new gh({setup:e,stage:zh,audio:Bh,host:Rh,onExit:e=>{e===`rematch`&&qh?$h({...qh,seed:qh.seed+1}):Qh()}}),window.vantage={battle:Hh.battle,screen:Hh,stage:zh,audio:Bh},Hh.start()}function eg(){Gh?.remove(),Gh=null,Wh?.dispose(),Wh=null,Hh&&=(Hh.dispose(),null)}zh.start(),window.advance=e=>{let t=Math.ceil(e*30);for(let e=0;e<t;e++)zh.frame(1/30)},document.getElementById(`loading`)?.remove(),Ih.has(`quick`)?(Ih.has(`arena`)&&(Kh.arenaId=Ih.get(`arena`)),$h(Ph(Kh,Number(Ih.get(`seed`)??Math.floor(Math.random()*1e6))))):Zh();