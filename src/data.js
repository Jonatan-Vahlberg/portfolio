export default {
    name: {
        first: 'Jonatan',
        last: 'Vahlberg'
    },
    headerTagline: [
        //Line 1 For Header
        'Jonatan Vahlberg.',
        //Line 2 For Header
        'App Developer, Student ',
        //Line 3 For Header
        'from Sweden'
    ],
    contactEmail: 'jonatan.ramses.vahlberg@gmail.com',
    abouttext: `I am a Swedish programmer from Stockholm, currently enrolled in a two year Application development course hosted by STI (Stockholm Institute of Technology).
         The main goal with the course is to give budding programers a more real program closely tied with the current tech industry. 
         The course helps us develop a lot of different skills such as  "HTML, CSS, SCCS, Javascript and NodeJS" for web-development. "IOS/Swift, Java, xamarin and React-Native" 
         for more native and hybrid mobile development. Alongside these skills we also develop a sense of UI/UX, 
         good clean coding, debugging, avoiding antipatterns, light database handling, working with APIs and perhaps most inportantly 
         Internship in real companies where we get to further develop our skills in real world projects`,
    aboutImage: './src/media/headshot.jpg',
    ShowAboutImage: true,

    projects: [
        {
            id: 1,
            title: 'MyLi',
            service: 'React-Native Application',

            imageSrc: 'myli',

            url: 'http://myli.se',
            desc: `During fall of 2019 i interned at MyIndicators a digital healthcare focused it company. During my time there 
            i together with a SCRUM team developed an MVP (Minimum Viable Product) in the form of a Android focused React-Native hybrid application. 
            We dealt with evrything from state managment in redux to navigation in RNRF while following a design document and a strict backend trough an API. 
            This project was the first real project i took part in and it gave me alot of insight into working for a company with deadlines and a suporting team. 
            If you like to know more about the work i did for MyIndicators you can either contact me or my suporvisor at the company`,
            contact: {
                name: 'Patrik Helenius',
                title: 'Co founder of MyIndicators',
                mail: 'patrik.helenius@myindicators.se',
                phone: '+46 702 632 650'
            }
        },
        {
            id: 2,
            title: 'Spoti-Theme',
            service: 'React-Native Application',
            imageSrc: 'spoti',
            desc: `Developed in school during a course part relating to API connection and handling. Spoti-Theme is a smaller project that grabs 
            playlists from spotify's public API and trough a firebase database saves your prefrences. The project was built over two weeks in early fall 2019 
            it was built using Expo's fantastic React-Native wrapper and firebase cloud-firestore as its database.`,
            url: 'https://expo.io/@jonatan_vahlberg/spoty-theme',
            gitHub: 'https://github.com/Jonatan-Vahlberg/spoti-theme'
        }
    ],
    social: [
        { name: 'Github', url: 'https://github.com/Jonatan-Vahlberg' },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/jonatan-vahlberg/'
        }
    ]
};