class Artist {
    constructor(name, age, genre, label){
        // decide what datatypes the varibles will be
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.label = label;
        this.albums = []
        this.songs = []
        this.image = ''
        this.instagram = null;
    }

    addAlbum(album){
        this.albums.push(album)
        console.log(`This is another album for ${this.name}`)
    }

    addSong(song){
        this.songs.push(song)
        console.log(`This is another song for ${this.name}`)
    }

    addImage(imageLink){
        this.image = imageLink
    }
    addIG(username){
        this.instagram = username
    }
}

const cudi = new Artist('Kid Cudi', '33', 'hip hop','GOOD Music')
console.log(cudi.genre)
cudi.addAlbum('man on the moon')
cudi.addAlbum('man on the moon 2')
cudi.addSong('Ghost')
cudi.addSong('Mr rager')
cudi.addImage('https://static.hollywoodreporter.com/wp-content/uploads/2020/10/GettyImages-1210689746-H-2020-1603925642-compressed.jpg')
cudi.instagram('kidcudi')