//write here your js code
        
        function d_portfolio(choix){
            var btn_d_all=document.getElementById('all').classList.remove('active');
            var btn_d_we=document.getElementById('web').classList.remove('active');
            var btn_d_mobile=document.getElementById('mobile').classList.remove('active');
            var btn_d_desktop=document.getElementById('desktop').classList.remove('active');

            var btn_choix=document.getElementById(choix).classList.add('active');


            var cls_web=document.getElementsByClassName('web');
            var cls_mobile=document.getElementsByClassName('mobile');
            var cls_desktop=document.getElementsByClassName('desktop');
            if(choix=="web"){
                for(var i=0;i<cls_web.length;i++){
                    cls_web[i].classList.add('show')
                }
                for(var i=0;i<cls_mobile.length;i++){
                    cls_mobile[i].classList.remove('show')
                }
                for(var j=0;j<cls_desktop.length;j++){
                    cls_desktop[j].classList.remove('show');
                }
                
            }
            else if(choix=="mobile"){
            for(var i=0;i<cls_mobile.length;i++){
                cls_mobile[i].classList.add('show')
            }
            for(var i=0;i<cls_web.length;i++){
                cls_web[i].classList.remove('show')
            }
            for(var j=0;j<cls_desktop.length;j++){
                cls_desktop[j].classList.remove('show');
            }
            }
            else if(choix=="desktop"){
            for(var i=0;i<cls_desktop.length;i++){
                cls_desktop[i].classList.add('show')
            }
            for(var i=0;i<cls_mobile.length;i++){
                cls_mobile[i].classList.remove('show')
            }
            for(var j=0;j<cls_web.length;j++){
                cls_web[j].classList.remove('show');
            }
            }
            else if(choix=="all"){
            for(var i=0;i<cls_desktop.length;i++){
                cls_desktop[i].classList.add('show')
            }
            for(var i=0;i<cls_mobile.length;i++){
                cls_mobile[i].classList.add('show')
            }
            for(var j=0;j<cls_web.length;j++){
                cls_web[j].classList.add('show');
            }
            }
        }



      //function for adding img
      function show_portfolio(name_projet,number_file,video,type){
        var carousel_inner=document.getElementById('carousel_inner');
        var btn_carsouel=document.getElementById("carousel_button");
        var get_btn=btn_carsouel.getElementsByTagName('button');
        if(get_btn.length>0){
          for(var j=get_btn.length-1;j>=0;j--){
            get_btn[j].remove();
          }
        }
        var div_exist=document.getElementsByClassName('carousel-item');
        if(div_exist.length>0){
          for(var y=div_exist.length-1;y>=0;y--){
            div_exist[y].remove();
          }
        }
        
            for(var i=1;i<=number_file;i++){
            var newBtn=document.createElement('button');
            newBtn.setAttribute("type","button");
            newBtn.setAttribute("data-bs-target","#carouselExampleCaptions");
            newBtn.setAttribute("data-bs-slide-to",""+i-1+"");
            newBtn.setAttribute("aria-label","slide "+i);
            var newDiv=document.createElement('div');
            newDiv.classList.add('carousel-item');
            if(i==1){
                newBtn.classList.add('active');
                newBtn.setAttribute("aria-current","true");
                newDiv.classList.add('active');
            }
            btn_carsouel.appendChild(newBtn);
        //   if(video=1){
        //     if(i==number_file){
        //       Create video element
        //       const video = document.createElement('video');
        //       video.src ="images/portfolio/"+name_projet+"/"+"portfolio-"+i+".mp4"
        //       video.controls = true;
        //       video.muted = false;
        //       // video.height = 240; // in px
        //       // video.width = 320; // in px
        //       video.classList.add('d-block');
        //       video.classList.add('w-100');

        //       // Include in HTML as child of #box
        //       newDiv.appendChild(video);
        //       var div2=document.createElement('div');
        //       div2.classList.add('carousel-caption');
        //       div2.classList.add('d-none');
        //       div2.classList.add('d-md-block');

        //       newDiv.appendChild(div2);
        //       carousel_inner.appendChild(newDiv);
        //     }
        //     else{
        //       var img=document.createElement('img');
        //       img.src="assets/img/"+name_projet+"/"+"portfolio-"+i+type;
        //       img.classList.add('d-block');
        //       img.classList.add('w-100');
        //       newDiv.appendChild(img);
        //       var div2=document.createElement('div');
        //       div2.classList.add('carousel-caption');
        //       div2.classList.add('d-none');
        //       div2.classList.add('d-md-block');

        //       newDiv.appendChild(div2);
        //       carousel_inner.appendChild(newDiv);
        //     }
        //   }
          
            var img=document.createElement('img');
            img.src="assets/img/"+name_projet+"/"+"portfolio-"+i+type;
            img.classList.add('d-block');
            img.classList.add('w-100');
            newDiv.appendChild(img);
            var div2=document.createElement('div');
            div2.classList.add('carousel-caption');
            div2.classList.add('d-none');
            div2.classList.add('d-md-block');

            newDiv.appendChild(div2);
            carousel_inner.appendChild(newDiv);
          

        }

      }