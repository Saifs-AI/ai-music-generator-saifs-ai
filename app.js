new Vue({
    el: '#app',
    data: {
        selectedGenre: 'Electronic',
        tempo: 120,
        selectedMood: 'Energetic',
        isGenerating: false,
        musicGenerated: false,
        genres: [
            'Electronic',
            'Rock',
            'Jazz',
            'Classical',
            'Hip Hop',
            'Ambient',
            'Pop'
        ],
        moods: [
            'Energetic',
            'Calm',
            'Happy',
            'Melancholic',
            'Mysterious',
            'Epic'
        ]
    },
    methods: {
        generateMusic() {
            this.isGenerating = true;
            this.musicGenerated = false;
            
            // Simulate AI generation process
            setTimeout(() => {
                this.isGenerating = false;
                this.musicGenerated = true;
                this.updateVisualizer();
            }, 3000);
        },
        downloadMusic() {
            // Simulate download
            alert('In the full version at saifs.ai, you can download your generated music!');
            window.location.href = 'https://saifs.ai';
        },
        getRandomHeight() {
            return Math.random() * 100 + 20;
        },
        updateVisualizer() {
            setInterval(() => {
                const bars = document.querySelectorAll('.wave-bar');
                bars.forEach(bar => {
                    bar.style.height = this.getRandomHeight() + 'px';
                });
            }, 100);
        }
    }
}); 