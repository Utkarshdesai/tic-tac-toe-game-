const Boxes = document.querySelectorAll('.box');
const newgamebutt =document.querySelector('.new-game');
const gameinfo  = document.querySelector('.current-player');
const Zero =document.querySelector('.zero');
const X = document.querySelector('.x')

 //default values 
  let currentplayer ;
  let gamegrid ; 
  let scoreX = 0;
  let score_0 = 0;

//wining position 
const win = [
    [0,1,2] ,
    [3,4,5] ,
    [6,7,8] ,
    [0,3,6],
    [1,4,7],
    [2,5,8] ,
    [0,4,8] ,
    [6,7,8]

]
//intializa the game on loading the page 
function intializegame () 
{  

  //remove X and 0
  // remove background color 
  //add pointer event
  Boxes.forEach( (box,index)=> {
    box.textContent = '';
    
    Boxes[index].style.pointerEvents = "all";
    box.classList.remove('win');
    
  })

  newgamebutt.classList.remove('addbutt');  
  currentplayer = 'X';
  gameinfo.textContent = `Current player - ${currentplayer}`;
  gamegrid = ['','','','','','','','','',];
 
 
}

intializegame(); 


function swapTurn() 
{
    if (currentplayer =='X') 
    {
        currentplayer = '0';
    }
    else{
        currentplayer = 'X';
    }
    //upate UI 
    gameinfo.textContent = `Current player - ${currentplayer}`;
}

   function wingame ()
    {   let ans ='';
        newgamebutt.classList.add("active");
         win.forEach( (position)=>{
          
          if ( (gamegrid[position[0]] !== "" || gamegrid[position[1]] !== "" || gamegrid[position[2]] !== "") 
          && (gamegrid[position[0]] === gamegrid[position[1]] ) && (gamegrid[position[1]] === gamegrid[position[2]]))                                                                                          

          
          
          {
              
                   if(gamegrid[position[0]] === 'X')
                      {
                         ans ='X'; 
                          
                         scoreX ++ ;
                         //update leaderboard of X
                         X.textContent = ` X - ${scoreX}`  ;
                               
                     }
                     else
                      {
                         ans ='0';
   
                         score_0 ++ ;
                          //update leaderboard of 0 
                         Zero.textContent = `0 - ${ score_0}`  ;
                        
                        }
 

                        //disable pointer event 
                        Boxes.forEach ( (box)=> {
                            box.style.pointerEvents='none';
                        })
              
              //change bg color to green 

              Boxes[position[0]].classList.add('win');
              Boxes[position[1]].classList.add('win');
              Boxes[position[2]].classList.add('win');
             
              //update winner on gameinfo
              gameinfo.textContent = `Winner is - ${ans}`;

             //add new butt class 
             newgamebutt.classList.add('addbutt');  
             
          }
           
      //game is tied  
      let count =0;
      gamegrid.forEach( (box) =>
       { 
        
          if(box !="") 
          {
            count ++;
          }
        
      })
     
      if (count==9)
      {  
        gameinfo.textContent = `Game is - tied`;

        //add new butt class 
        newgamebutt.classList.add('addbutt');  
      }
        
       })
        
   
    
    }
    

 function handleevent (index)
 {  
    if (gamegrid[index]=== "")
    {   
        //update value in gamegrid array
        gamegrid[index] = currentplayer;
        console.log(gamegrid[index]);

        //set currentplayer display on screen
        Boxes[index].textContent=currentplayer;
        console.log(Boxes[index].textContent);

        //set pointer to none
        Boxes[index].style.pointerEvents='none';
        //change the turn ;
        
        swapTurn ();
        //check if any one is winner;
        wingame();
    }

 }

Boxes.forEach((box,index)=> {
    
    box.addEventListener ('click' , ()=>{
       handleevent(index)
      
    })

})

newgamebutt.addEventListener('click' ,()=>{
    intializegame();
})



