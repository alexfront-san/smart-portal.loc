$( document ).ready(function() {
        naria1=$('.news__type--four>div[aria-label="1 / 5"]')
        naria2=$('.news__type--four>div[aria-label="2 / 5"]')
        nitem1=naria1[0].children
        nitem2=naria2[0].children
        console.log(nitem1)
        console.log(nitem2)
        imsrc=["","","","","",""]
        ntitle=["","","","","",""]
        ndate=["","","","","",""]
        nhref=["","","","","",""]

        for (ii=0; ii<3;ii++){
            imsrc[ii]=$(nitem1[ii].children[0].children[0]).attr('src')
            console.log(imsrc)
        }
        for (ii=0; ii<3;ii++){
            imsrc[ii+3]=$(nitem2[ii].children[0].children[0]).attr('src')
            console.log(imsrc)
        }

        for (ii=0; ii<3;ii++){
            ntitle[ii]=$(nitem1[ii].children[1].children[1].children[0].children[0]).html()
            console.log(ntitle)
        }
        for (ii=0; ii<3;ii++){
            ntitle[ii+3]=$(nitem2[ii].children[1].children[1].children[0].children[0]).html()
            console.log(ntitle)
        }

        for (ii=0; ii<3;ii++){
            ndate[ii]=$(nitem1[ii].children[1].children[0]).html()
            console.log(ndate)
        }
        for (ii=0; ii<3;ii++){
            ndate[ii+3]=$(nitem2[ii].children[1].children[0]).html()
            console.log(ndate)
        }

        for (ii=0; ii<3;ii++){
            nhref[ii]=$(nitem1[ii].children[1].children[1].children[0].children[0]).attr('href')
            console.log(nhref)
        }
        for (ii=0; ii<3;ii++){
            nhref[ii+3]=$(nitem1[ii].children[1].children[1].children[0].children[0]).attr('href')
            console.log(nhref)
        }
        mw=$('div.main__wrapper')

        $(mw).append(`<style>
            .main__wrapper>.slider__wrapper{
                display:none;
            }
            .ahf_main_slider{
                display:block;
                width:100%;
                margin-bottom:10px;
                overflow:hidden
            }
            </style>
        `)
        sansl= document.createElement('div')
        sansl.className=('ahf_main_slider')
        sansl1=document.createElement('div')
        sansl1.className=('ahf_main_slider1')
        ams_items=[]
        ams_imgs=[]
        ams_cnts=[]
        ams_heads=[]
        ams_dates=[]
        for (ii=0; ii<6; ii++){
            ams_items[ii]=document.createElement('div')
            ams_items[ii].className=('ams_item'+ii)
        }
        for (ii=0; ii<6; ii++){
            ams_imgs[ii]=document.createElement('img')
            ams_imgs[ii].className=('ams_img'+ii)
        }
        for (ii=0; ii<6; ii++){
            ams_cnts[ii]=document.createElement('div')
            ams_cnts[ii].className=('ams_cnt'+ii)
        }
        for (ii=0; ii<6; ii++){
            ams_heads[ii]=document.createElement('a')
            ams_heads[ii].className=('ams_head'+ii)
        }
        for (ii=0; ii<6; ii++){
            ams_dates[ii]=document.createElement('div')
            ams_dates[ii].className=('ams_date'+ii)
        }
        
        $(mw).prepend(sansl)
        sansl.append(sansl1)
        for (ii=0; ii<6; ii++) {
            sansl1.append(ams_items[ii])
            ams_items[ii].append(ams_imgs[ii])
            ams_items[ii].append(ams_cnts[ii])
            ams_cnts[ii].append(ams_heads[ii])
            ams_cnts[ii].append(ams_dates[ii])
        }
        
        sanslw=$(sansl).width()
        sanslh=(sanslw/16)*9
        $(sansl1).css({
            'display':'flex',
            'height':sanslh
        })
        $(sansl).attr('style', 'height:'+sanslh+'px')
        $(ams_items).css({
            'min-width':sanslw,
            'height':sanslh,
            'text-align':'center'
        })
        for (ii=0; ii<6; ii++){
            $(ams_imgs[ii]).attr('src', imsrc[ii])
        }
        $(ams_imgs).css({
            'width':'auto',
            'max-width':sanslw,
            'max-height':sanslh
        })
        itera=1
        stild=document.createElement('style')
        $(mw).append(stild)
        ams_items[6]=$(ams_items[0]).clone()
        $(ams_items[6]).toggleClass('ams_item6')
        $(ams_items[6]).toggleClass('ams_item0')
        $(sansl1).append(ams_items[6])
        function dvizhenya() {
            
                dvizh='.ahf_main_slider1{transition:1s;transform:translateX(-'+(sanslw*itera)+'px)}'
                console.log(sanslw*itera)
                $(stild).html(dvizh)
                console.log('ite '+itera)

            if (itera==6){
                setTimeout(() => {
                dvizh='.ahf_main_slider1{transition:unset}'
                $(stild).html(dvizh)
                console.log('ite '+itera)},1000)
            }
            itera++
            console.log('ite '+itera)
            if (itera==7){
                itera=1
                console.log('ite '+itera)
            }
        }
        setInterval(dvizhenya, 1500)
        $(ams_imgs).wrap('<div class="ams_iw"></div>')
        slii7=$(sl_item7).children()[0]
        $(slii7).wrap('<div class="ams_iw"></div>')
        $(ams_imgs).css({
            'width':'fit-content',
            'height':'fit-content',
            'position':'relative',
            'z-index':'2'
        })
        $(slii7).css({
            'width':'fit-content',
            'height':'fit-content',
            'position':'relative',
            'z-index':'2'
        })
        ams_iw=$('.ams_iw')
        ams_iw.css({
            'width':sanslw,
            'height':sanslh,
            'backdrop-filter': 'blur(10px)'
        })
        blur=document.createElement('div')
        blur.className='blur'
        blurcss=document.createElement('style')
        blurcss.className='blurcss'
        $(mw).prepend(blurcss)
        $(ams_iw).prepend(blur)
        $(blurcss).html(`
            .blur{
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            position: absolute;
            width: `+sanslw+`px;
            height: `+sanslh+`px;
            z-index:1
        }`)
        amsiws=''
        for (ii=0; ii<7; ii++) {
            if (ii<6){
            $(ams_iw[ii]).css({
                'background-size':'auto'
            })
            amsiws=$(ams_iw[ii]).attr('style')
            $(ams_iw[ii]).attr('style', amsiws+'background: url("./'+imsrc[ii].substr(1)+'")')
            }
            if (ii==6){
                $(ams_iw[ii]).css({
                    'background-size':'auto'
                })
                amsiws=$(ams_iw[ii]).attr('style')
            $(ams_iw[ii]).attr('style', amsiws+'background: url("./'+imsrc[0].substr(1)+'")')
            }
        }
    })
