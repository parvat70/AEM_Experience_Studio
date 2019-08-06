// Let's define our first command. First the text we expect, and then the function it should call
try {


    //initialization
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 5;
    var allowListenFlag = false;
    recognition.continuous = true;
    var multiVidIndex = 0;
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1.3;
    utter.pitch = 1;
    // utter.text = "Sorry I didn't Understand";
    utter.lang = 'en-US';

    // event after text has been spoken
    utter.onend = function () {
        // alert('Speech has finished');
    }


    //this function will start recording voice commands
    function record() {
        if (recognition) {
            // e.preventDefault();
            recognition.start();

        } else {
            alert('Voice Recognition functionality is not supported by this browser. Please open website in latest version of chrome to use voice recognition');
        }

    }



    //This function returns voice command match result
    function searchString(str, searchArray) {
        var obj = { flag: false, item: '' };
        searchArray.forEach(function (item) {
            // if (str.split(' ').indexOf(item) !== -1 && allowListenFlag && obj.flag) {
            //     obj.flag = true;
            //     obj.item = item
            // } else {
            if (str.indexOf(item) !== -1 && !obj.flag) {
                obj.flag = true;
                obj.item = item
            }
            // }
        });

        return obj;

    }

    //
    var CONST = {
        VOICE_KEYWORD: ['next image', 'previous image', 'next slide', 'previous slide', 'next card', 'previous card', 'next', 'go to', 'team', 'products', 'chatbots', 'play', 'pause', 'close', 'clothes', 'stop', 'previous', 'scroll down', 'scroll up'],
        CLARA: ['hi clara', 'hello clara', 'ok', 'ok clara']
    }


    //this function will stop recording voice commands
    function stopRecording() {
        recognition.stop();
        // document.getElementById('stop').style.display = "none";
        // document.getElementById('record').style.display = "inline-block";
        // document.getElementById('mic-txt').style.visibility = "hidden";
    }


    recognition.onresult = function (event) {
        var voiceMsg = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
        // if (allowListenFlag && !searchString(voiceMsg, CONST.CLARA).flag) {
        listenForVoiceCommands(voiceMsg);
        // }
        // if (searchString(voiceMsg, CONST.CLARA).flag /*|| document.getElementsByTagName('video')[0].closest('.fade').classList.contains('show')*/ ) {
        //     allowListenFlag = true;
        //     // document.getElementById('mic-txt').style.visibility = "visible";
        // } else if (!searchString(voiceMsg, ['play', 'pause', 'next', 'previous', 'scroll down', 'scroll up']).flag) {
        //     allowListenFlag = false;
        //     // document.getElementById('mic-txt').style.visibility = "hidden";

        // }

        console.log(voiceMsg);
    }

    recognition.onerror = function (event) {

        console.log('error', event)
    }

    function scrollByPos(pos) {
        window.scrollBy(0, pos)
    }
    //This fuction will execute the voice commands
    function listenForVoiceCommands(voiceMsg) {
        console.log('listenForVoiceCommands');
        console.log(searchString(voiceMsg, CONST.VOICE_KEYWORD).item);
        switch (searchString(voiceMsg, CONST.VOICE_KEYWORD).item) {
            case 'play':
            case 'pause':
            case 'stop':
            case 'next':
            case 'previous':
                videoComponentActions(voiceMsg);
                break;
            case 'scroll up':
                scrollByPos(-600);
                break;

            case 'scroll down':
                scrollByPos(600);
                break;

            case 'go to':
                document.querySelectorAll('.navbar_voice #header_voice a').forEach(function (e) {
                    if (voiceMsg.indexOf(e.innerText.toLowerCase()) !== -1) {
                        e.click();
                        match = true;
                        allowListenFlag = true;
                        // console.log(e);
                    }
                });
                setTimeout(function () {
                    if (document.getElementById('navigation:hamburger-menu-toggle').className.indexOf('open') !== -1) {
                        document.getElementById('navigation:hamburger-menu-toggle').click();
                    }
                }, 100);


                break;
            case 'next slide':
            case 'next image':
                changeSlide(1);
                break;

            case 'previous image':
            case 'previous slide':
                changeSlide(-1);
                break;

            case 'next card':
                changeCardSlide(1);
                break;

            case 'previous card':
                changeCardSlide(-1);
                break;

            default:
                console.log("Nothing is matched");
                break;

        }

    }


    function changeSlide(index) {
        var slider = returnVisibleEleInPageFold(document.querySelectorAll('.banner_carousel_voice')).childNodes[0].childNodes[3].childNodes;
        slider.forEach(function (e, i) {
            if (e.className === 'active' && (i + index) <= (slider.length - 1) && (i + index) >= 0)

                slider[i + index].click()

        });
    }

    //Return Visible Element in Page Fold
    function returnVisibleEleInPageFold(arr) {
        var ele = null;
        arr.forEach(function (element) {
            if ((element.offsetTop <= (window.scrollY + window.innerHeight - 200)) &&
                (element.offsetHeight + element.offsetTop - 200) >= window.scrollY && !ele) {
                ele = element;
            }
        });

        return ele;

    }

    function getFirstCardInPageFold() {
        var sortObj = {}
        var card3d = returnVisibleEleInPageFold(document.querySelectorAll('.card_3d_voice')) ?
            returnVisibleEleInPageFold(document.querySelectorAll('.card_3d_voice')).offsetTop :
            Infinity;
        card3d !== Infinity ? sortObj[card3d] = 'card3d' : '';
        var cardDouble = returnVisibleEleInPageFold(document.querySelectorAll('.card_double_voice')) ?
            returnVisibleEleInPageFold(document.querySelectorAll('.card_double_voice')).offsetTop :
            Infinity;
        cardDouble !== Infinity ? sortObj[cardDouble] = 'cardDouble' : '';

        var cardTriple = returnVisibleEleInPageFold(document.querySelectorAll('.card_triple_voice')) ?
            returnVisibleEleInPageFold(document.querySelectorAll('.card_triple_voice')).offsetTop :
            Infinity;
        cardTriple !== Infinity ? sortObj[cardTriple] = 'cardTriple' : '';
        return sortObj[Math.min(card3d, cardDouble, cardTriple)];

    }


    function changeCardSlide(index) {
        var ele;
        var firstCardVisible = getFirstCardInPageFold();
        if (returnVisibleEleInPageFold(document.querySelectorAll('.card_3d_voice')) && firstCardVisible === 'card3d') {
            ele = returnVisibleEleInPageFold(document.querySelectorAll('.card_3d_voice'));
            ele = ele.children[0].children[0].children[1].childNodes;
            ele.forEach(function (elem, i) {
                if (elem.childNodes[0].className.indexOf('active') !== -1 && (i + index) <= (ele.length - 1) && (i + index) >= 0) {
                    ele[i + index].childNodes[0].click()
                }
            })
        } else if (returnVisibleEleInPageFold(document.querySelectorAll('.card_triple_voice')) && firstCardVisible === 'cardTriple') {
            ele = returnVisibleEleInPageFold(document.querySelectorAll('.card_triple_voice'));
            ele = ele.childNodes[0].childNodes[0].childNodes[0].childNodes[3].childNodes;
            ele.forEach(function (elem, i) {
                if (elem.className.indexOf('swiper-pagination-bullet-active') !== -1 && (i + index) <= (ele.length - 1) && (i + index) >= 0) {
                    ele[i + index].click()
                }
            })
        } else if (returnVisibleEleInPageFold(document.querySelectorAll('.card_double_voice')) && firstCardVisible === 'cardDouble') {
            ele = returnVisibleEleInPageFold(document.querySelectorAll('.card_double_voice'));
            ele = ele.childNodes[0].childNodes[0].childNodes[0].childNodes[3].childNodes;
            ele.forEach(function (elem, i) {
                if (elem.className.indexOf('swiper-pagination-bullet-active') !== -1 && (i + index) <= (ele.length - 1) && (i + index) >= 0) {
                    ele[i + index].click()
                }
            })
        }

    }

    function isElementVisibleInPageFold(element) {
        if ((element.offsetTop <= (window.scrollY + window.innerHeight - 200)) &&
            (element.offsetHeight + element.offsetTop - 200) >= window.scrollY) {
            return true;
        } else {
            return false;
        }
    }

    function getMultiVidIndex(ele) {
        var index = 0;
        var ele1 = ele.childNodes[2].childNodes[1].childNodes[0].childNodes
        ele1.forEach(function (e) {
            if (e.childNodes[2].childNodes[0].childNodes[0].innerText === ele.childNodes[0].childNodes[6].childNodes[0].innerText)
                index = e.dataset.slickIndex
        })
        return index;
    }

    function getFirstVideoCompInPageFold(multiVidComp, singleVidComp) {
        var sortObj = {}
        var multiVid = multiVidComp ? multiVidComp.offsetTop : Infinity;
        multiVid !== Infinity ? sortObj[multiVid] = 'multiVidComp' : '';
        var singleVid = singleVidComp ? singleVidComp.offsetTop : Infinity;
        singleVid !== Infinity ? sortObj[singleVid] = 'singleVidComp' : '';
        return sortObj[Math.min(multiVid, singleVid)];
    }


    function videoComponentActions(voiceMsg) {
        var multiVidComp = returnVisibleEleInPageFold(document.querySelectorAll('.video_carousel_voice'));
        var singleVidComp = returnVisibleEleInPageFold(document.querySelectorAll('.single_video_voice'));
        var firstVidCompVisible = getFirstVideoCompInPageFold(multiVidComp, singleVidComp)
        if (multiVidComp && firstVidCompVisible === 'multiVidComp') {

            switch (searchString(voiceMsg, CONST.VOICE_KEYWORD).item) {
                case 'play':
                    if (multiVidComp.childNodes[0].childNodes[0].style.opacity !== "0")
                        multiVidComp.childNodes[0].childNodes[0].click()
                    break;
                case 'pause':
                case 'stop':
                    if (multiVidComp.childNodes[0].childNodes[0].style.opacity === '0')
                        multiVidComp.childNodes[0].childNodes[0].click()
                    break;
                case 'next':
                    if (parseInt(getMultiVidIndex(multiVidComp)) < (multiVidComp.childNodes[2].childNodes[1].childNodes[0].childNodes.length - 1)) {
                        multiVidComp.childNodes[2].childNodes[2].getAttribute('aria-disabled') !== 'false' ? '' : multiVidComp.childNodes[2].childNodes[2].click();
                        multiVidComp.childNodes[2].childNodes[1].childNodes[0].childNodes[parseInt(getMultiVidIndex(multiVidComp)) + 1].click()
                    }
                    break;
                case 'previous':
                    if (parseInt(getMultiVidIndex(multiVidComp)) > 0) {
                        multiVidComp.childNodes[2].childNodes[0].getAttribute('aria-disabled') !== 'false' ? '' : multiVidComp.childNodes[2].childNodes[0].click();
                        multiVidComp.childNodes[2].childNodes[1].childNodes[0].childNodes[parseInt(getMultiVidIndex(multiVidComp)) - 1].click()
                    }
                    break;
                default:
                    console.log("Nothing is matched");
                    break;

            }
        } else if (isElementVisibleInPageFold(singleVidComp) && firstVidCompVisible === 'singleVidComp') {
            if (singleVidComp.childNodes[0].style.opacity !== "0" || searchString(voiceMsg, ['pause', 'stop']).flag)
                singleVidComp.childNodes[0].click();
        }

        // var element = ()
    }

    recognition.onend = function () {
        stopRecording();
    }
} catch (e) {
    console.log(e);

}