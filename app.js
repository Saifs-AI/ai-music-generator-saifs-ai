new Vue({
    el: '#app',
    data: {
        musicDescription: '',
        isGenerating: false
    },
    methods: {
        generateMusic() {
            window.location.href = 'https://saifs.ai/ai-music-generator-saifs-ai';
        }
    }
}); 