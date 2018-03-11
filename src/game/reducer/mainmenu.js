const menudata = {
  title:"VENUS",
body: [{key:0,  body:"[N]ew  Game"},
       {key:1,  body:"[L]oad Game"}]
};

export default {
  show:(state,action)=>{
    state.get()
         .set('overlay',menudata);
    state.get().core.set('state','mainmenu');
  },
  hide:(state,action)=>(
    {
      type:"menu.hide",
      nextstate:"game"
    }
  ),
}
