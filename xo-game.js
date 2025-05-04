



let data = "url('./Images/x.png')";//data X-image or O-image change
let win = "false";
let board = ["", "", "", "", "", "", "", "", ""];//X,O value Stored
let idindex=[];//store id values
let countX = 0;//count for X-Turn
let countO = 0;//count for O-Turn
let winstatusX=0;//win status X 
let winstatusO=0;//win status O
let drawstaus=0;// match draw status 



function play(g) {//id pass the function

    let box = document.getElementById(g);//id store variable box
    let gif = document.getElementById("gif1");//gif img display


    if (box.style.backgroundImage == "" && win == "false") {//data-value check empty or zero
        if (data == "url('./Images/x.png')") { //data equal X check
            //Print image id
            box.style.backgroundImage = "url('./Images/x.png')";

            for (let i = 0; i < board.length; i++) {
                let boxid = box.id;//box id
                let boardindex = "id" + i;//board index
                if (boxid == boardindex) {//check same
                    board[i] = "X";//assign value
                    idindex[i]=boxid;//store id values
                }
            }

            data = "url('./Images/o-2.png')";//change data value

            if (data == "url('./Images/o-2.png')") {

                countO++;//counter increase O

                //borderColor Edit
                let color = document.getElementById("blue");
                color.style.borderBottomColor = "blue";
                //borderColor Edit
                let colr = document.getElementById("red");
                colr.style.borderBottomColor = "black";
    


                gif.style.backgroundImage = "url('./Images/blue-team.gif')";
                gif.style.borderColor = "blue";


            }
            else {
                //Default Border Color
                color.style.borderBottomColor = "black";
            }





        }
        else {

            //Print image id
            box.style.backgroundImage = "url('./Images/o-2.png')";

            for (let i = 0; i < board.length; i++) {
                let boxid = box.id;//box id
                let boardindex = "id" + i;//board index
                if (boxid == boardindex) {//check same
                    board[i] = "O";//assign value
                    idindex[i]=boxid;//store id values
                }
            }


            data = "url('./Images/x.png')";

            if (data == "url('./Images/x.png')") {

                countX++;//counter increase X

                //borderColor Edit
                let color = document.getElementById("red");
                color.style.borderBottomColor = "red";
                //borderColor Edit
                let coor = document.getElementById("blue");
                coor.style.borderBottomColor = "black";
                



                gif.style.backgroundImage = "url('./Images/red-team.gif')";
                gif.style.borderColor = "red";


            }
            else {
                //Default Border Color
                color.style.borderBottomColor = "black";
            }



        }

    }

    Winner(board);
    Draw(board, countO, countX);


}





function reset(){
   
    for(let r=0;r<board.length;r++){
      board[r]="";
    for(let e=0;e<idindex.length;e++
        
    ){
        let allid=document.getElementById(idindex[e]); 
     
        if(allid.style.backgroundImage !==""){
           allid.style.backgroundImage="";
        }
        else{
           allid.style.backgroundImage="";
        }
    }
     data = "url('./Images/x.png')";//X value started

     let color = document.getElementById("red");
     color.style.borderBottomColor = "red";

        
     win = "false";
        countX = 0;//
        countO = 0;//Started value
    

       
    }
    

}






function Winner(bod) {

    let pattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let p = 0; p < pattern.length; p++) {
        const [ind1, ind2, ind3] = pattern[p];//index 1,2,3 destructure Array
        //Check all values are Equal
        if (bod[ind1] && bod[ind1] === bod[ind2] && bod[ind2] === bod[ind3]) {

            win = "true";
        
            if (win) {
                // Pop Box
                var c = document.getElementById("view");
                c.style.display = "block";
                let msg = c.querySelector("p");
                document.getElementById("igif").style.backgroundImage = "url('./Images/win.gif')";
                msg.innerText = "Congratulations    " + bod[ind1] + " Wins";

                var ctn = document.getElementsByClassName("close")[0];
                ctn.onclick = function () {
                    c.style.display = "none";
                   

                    //display Winstatus

                    if(bod[ind1]=="X" ){
                        winstatusX++;
                     return   document.getElementById("turn-1").innerHTML=winstatusX;
                    }
                    else if(bod[ind1]=="O"){
                        winstatusO++;
                       return document.getElementById("turn-3").innerHTML=winstatusO;
                    }
                
                }

                return true;

            }

        }

    }



};



function Draw(boy, cx, co) {

    for (let t = 0; t < boy.length; t++) {
        //counter is 9 and win false 
        let ct = cx + co;//counter X and O added
        if (ct == "9" && boy[t] != "" && win == "false") {

            // Pop Box
            var c = document.getElementById("view");
            c.style.display = "block";
            let msg = c.querySelector("p");
            document.getElementById("igif").style.backgroundImage = "url('./Images/tiles.gif')";
            msg.innerText = "Match is Draw";

            var ctn = document.getElementsByClassName("close")[0];
            ctn.onclick = function () {
                c.style.display = "none";
                
            drawstaus++;
          document.getElementById("turn-2").innerHTML=drawstaus;


                boy[t]="";


                return true;
            }



        }



    }



}

























