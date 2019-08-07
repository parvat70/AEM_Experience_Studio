var VoiceCommands = Vue.component('voice-commands', {
    template: `
    <div @click="showText" id="micbtn_voice" :class="'voice-icon ' +  position" ref="voiceComponent">
    <div class="micText" id="micText" ref="hint">{{readyStateText}}</div>
        <div class="mic" id="mic" >
            <div class="mic-icon-wrapper">
                <div class="mic-icon"></div>
                <div class="mic-icon stop-img"></div>
            </div>
        </div>
    </div>`,
    name: "VoiceCommands",
    data() {
        return {}
    },
    props: {
        position: {
            type: String,
            default: 'center-right'
        },
        readyStateText: {
            type: String,
            default: 'Listening...'
        }
    },
    methods: {
        showText() {

            var voiceComponent = this.$refs["voiceComponent"];
            var hint = this.$refs["hint"]
            if (hint.style.visibility != 'visible') {
                hint.style.visibility = 'visible';
                voiceComponent.classList.add('active');
                record();

            } else {
                hint.style.visibility = 'hidden';
                voiceComponent.classList.remove('active');
                stopRecording();
            }
        }

    }
});