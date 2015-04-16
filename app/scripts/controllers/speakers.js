'use strict';

/**
 * @ngdoc function
 * @name gmicnycApp.controller:SpeakersCtrl
 * @description
 * # SpeakersCtrl
 * Controller of the gmicnycApp
 */
angular.module('gmicnycApp')
  .controller('SpeakersCtrl', function ($scope) {
    $scope.speakers = [
      {
        'speakerId': 1,
        'firstName': 'Ryan',
        'lastName': 'Matzner',
        'company': 'Fueled',
        'jobTitle': 'Director & Chief Strategist',
        'bio': 'Ryan Matzner is the Director of Strategy at Fueled, a mobile design and development shop based in NYC and London. He has a decade of online and mobile marketing experience, working with clients such as American Express, Condé Nast, Ideeli, Thrillist, HBO, QuizUp, Barneys, and Gilt Groupe. He can be found on Facebook, Twitter, LinkedIn and Google+.',
        'twitter': 'rdm'
      },{
        'speakerId': 2,
        'firstName': 'Tyler',
        'lastName': 'McKinley',
        'company': 'MobileRQ',
        'jobTitle': 'CEO',
        'bio': '',
        'twitter': 'TylerMcKinley7'
      },{
        'speakerId': 3,
        'firstName': 'David',
        'lastName': 'Berkowitz',
        'company': 'MRY',
        'jobTitle': 'Chief Marketing Officer',
        'picture': '/images/speakers/david-berkowitz.jpg',
        'bio': '<p>David Berkowitz is Chief Marketing Officer at agency MRY, a division of Publicis Groupe, where he directs the agency\'s communications and gains visibility for clients such as Visa, Johnson & Johnson, and Coca-Cola. Previously, he spent seven years at 360i, serving as Vice President of Emerging Media; he co-founded its social media practice and led its Startup Outlook initiative. David has contributed more than 500 columns to outlets such as Ad Age, MediaPost, and Mashable, and he has penned his blog MarketersStudio.com since 2005. He has spoken at more than 250 events globally, including a commencement address at his alma mater, Binghamton University.</p>',
        'twitter': 'dberkowitz'
      },{
        'speakerId': 4,
        'firstName': 'Jeff',
        'lastName': 'Arbour',
        'company': 'Plyfe',
        'jobTitle': 'Co-founder & CMO',
        'bio': '<p>Jeff Arbour is the CMO and co-founder of Plyfe, with The Plyfe Platform anyone can create interactive cards in minutes [no coding].</p><p>Previous to Plyfe, Arbour was the Senior Vice President of North America at The Hyperfactory, where he was a key driver behind the company\'s growth in North America and defined domestic and global mobile strategies and executions for some of the world\'s most prestigious brands, leading to the eventual acquisition of The Hyperfactory by Meredith Corporation in 2010.</p><p>Arbour has been helping brands navigate the new media space since 2003. Jeff also sits on several advisory boards for digital companies, including Quixey and Cameo (acquired by Vimeo). Jeff is also a founding advisor for Palindrome Advisors, a not-for-profit organization.</p><p>Over the years, Jeff has worked with top clients such as Toyota, Ab InBev, BlackBerry, L\'Oréal, Coca-Cola, Intel, Microsoft and Kraft, and has won numerous awards recognized by the Mobile Marketing Association, AdTech and the Webbys, among others.</p><p>In 2008, Jeff was named #1 in DM News\' Top 30 Under 30, Direct and Interactive Marketers Under 30, as well as one of the Top 100 Most Influential Marketers of 2008 and 2009 by Invesp Consulting, and continues to be a sought after guest speaker at various international conferences</p>',
        'twitter': 'jeffarbour'
      },{
        'speakerId': 5,
        'firstName': 'Fabio',
        'lastName': 'Sisinni',
        'company': 'Shopkick',
        'jobTitle': 'VP Product',
        'bio': '',
        'twitter': 'fabionow'
      },{
        'speakerId': 6,
        'firstName': 'Teal',
        'lastName': 'Newland',
        'company': 'StumbleUpon',
        'jobTitle': 'VP of Marketing, Revenue, Partnerships',
        'bio': '',
        'twitter': 'tealn'
      },{
        'speakerId': 7,
        'firstName': 'Steve',
        'lastName': 'Callanan',
        'company': 'Wirewax',
        'jobTitle': 'Co-founder & CEO',
        'bio': '<p>Steve, an Electronic Engineering major, established his first production company in 2001 producing movie trailers, motion graphics, music videos and commercials; and was also producing over 400 hours of branded, short-form fashion and beauty content for the four biggest lifestyle publishers. He proposed that online video content should be as \'connected\' as the rest of the web; linking pixels to people, products and information was the goal. He engineered the world\'s first shoppable video player which lead to the most powerful interactive video platform to help hundreds of global brands realize their video potential.</p>',
        'twitter': 'steviewax'
      },{
        'speakerId': 8,
        'firstName': 'Jill',
        'lastName': 'Wilson',
        'company': 'SGN',
        'jobTitle': 'SVP of Game Development',
        'bio': '<p>As SVP of Game Development, Jill (Schneiderman) Wilson oversees all aspects of SGN\'s production, from concept through lifecycle. She is responsible for both the strategic planning and day-to-day operations of the company\'s industry-leading cross-platform game development. As employee #3 (after founding partners), Jill spearheaded the company\'s original expansion into game development and has grown their production team into the mobile-social leader it is today.</p><p>Prior to SGN, Jill held a hybrid of business and creative roles at start-up board game company, Imagination Games. During her tenure with Imagination, Jill pioneered the company\'s international sales and outbound licensing business and created several board games, including the Gossip Girl: Never Have I Ever game.</p><p>Jill serves as an advisor to the Casual Games Association and is a regular speaker at industry events. In her spare time, she plays competitive backgammon in the Bay Area, where she currently resides. Jill graduated Magna Cum Laude from the University of Southern California, and was born and raised in New York City.</p>',
        'twitter': ''
      },{
        'speakerId': 9,
        'firstName': 'Dan',
        'lastName': 'Herman',
        'company': 'ChatID',
        'jobTitle': 'Founder & CEO',
        'bio': '',
        'twitter': 'dan_herman'
      },{
        'speakerId': 10,
        'firstName': 'Wesley',
        'lastName': 'Barrow',
        'company': 'Nomi',
        'jobTitle': 'Founder',
        'bio': '',
        'twitter': 'wesleybarrow'
      },{
        'speakerId': 11,
        'firstName': 'Ryan',
        'lastName': 'Craver',
        'company': 'Lamour Group',
        'jobTitle': 'SVP Emerging Brands, Licensing & Digital',
        'picture': '/images/speakers/ryan-craver.jpg',
        'bio': 'Ryan\'s natural fascination with the intersection of retail and technology has led to a career of inspiring and leading retailers to be on the forefront of the evolving "connected retail" environment. Ryan enjoys tackling changing consumer dynamics and defining how retail organizations and brands can leverage technology to strengthen their competitive position. Ryan currently leads Emerging Brands, Licensing and Digital Strategy for Lamour Group\'s portfolio of global brands while advising several startups focused on Mobile and AdTech. Prior to joining Lamour, Ryan was in charge of the core department store strategy at Lord & Taylor / Hudson\'s Bay Company and was a senior leader at Accenture, driving growth and profit improvement across multiple clients, including Virgin Media, FedEx and Best Buy.',
        'twitter': 'ryanmcraver'
      },{
        'speakerId': 12,
        'firstName': 'Yev',
        'lastName': 'Galper',
        'company': 'EPAM',
        'jobTitle': 'Head of Mobile Competency Center',
        'bio': '',
        'twitter': ''
      },{
        'speakerId': 15,
        'firstName': 'Mark',
        'lastName': 'Egerman',
        'company': 'Cover',
        'jobTitle': 'Co-founder',
        'bio': '',
        'twitter': 'megerman'
      },{
        'speakerId': 17,
        'firstName': 'Tim',
        'lastName': 'Chang',
        'company': 'Mayfield',
        'jobTitle': 'Managing Director',
        'bio': '<p>"I\'ve learned a lot about teamwork from the three bands I perform with. Each member should possess a unique voice and super-power, but only when the collective is comprised of complementary talents does real magic occur. The same dynamic applies for building startups and venture investing."</p><p>I\'m currently championing:</p><ul><li>3D Robotics: The world pioneer in unmanned aerial vehicle (UAV) drone platforms</li><li>fitmob: Re-inventing the gym through local social group workouts</li><li>HealthTap: Mobile-first doctor-patient community and on-demand health services</li><li>Lantern: Online programs and coaching that strengthen your emotional well-being</li><li>Massdrop: Massdrop is building an online community for enthusiasts.</li><li>Moat: Brand analytics and intelligence SaaS platform</li><li>OUYA: Android-powered video game microconsole and community</li><li>Syntertainment: Stealth company from the creator of SimCity, the Sims and Spore</li><li>Zirtual: Virtual assistant services marketplace</li></ul><p>Some of my notable successes:</p><ul><li>AdChina: Acquired by Alibaba</li><li>Basis: The industry\'s most advanced wearable health tracker (acquired by Intel in 2014)</li><li>Iridigm: Revolutionary MEMS-based reflective displays (acquired by Qualcomm)</li><li>ngMoco: Early leader in mobile social gaming (acquired by DeNA)</li><li>Playdom: One of the first three big social game publishers (acquired by Disney)</li></ul><p>Tim\'s pre-Mayfield investments include:</p><ul><li>Lumosity: Leader in brain training and mental fitness</li><li>PCH International: Virtualized design, manufacturing, and logistics services for next-generation connected devices</li></ul><p>Awards & recognition:</p><ul><li>One of "Top 100 Tech Investors" on Forbes Midas list in 2011 & 2012</li><li>One of "12 Most Influential Tech Investors" by CNET</li><li>Always On Digital Media & Mobile Power Player</li><li>Gamification Summit award for Special Achievement in the Industry</li></ul>',
        'twitter': ''
      },{
        'speakerId': 18,
        'firstName': 'Matt',
        'lastName': 'Restivo',
        'company': 'NHL',
        'jobTitle': 'Director of Product Development',
        'bio': '<p>As the Director of Product Development, Matt Restivo creates and improves the NHL user experiences across multiple digital platforms, including NHL apps and NHL.com. He\'s currently focused on providing a greater experience for the hockey fan on the go, at home and in the arena.</p><p>Prior to joining the NHL in November 2013, Restivo spent 6 years at ESPN and emerged as one of the pioneers in the mobile notifications space. He played an integral role in doubling the ESPN\'s app\'s audience size and vastly improving personalization by envisioning and executing the SportsCenter Inbox.</p><p>A native of Commack, NY, Restivo received his Computer Science degree from Siena College. He currently resides in New York City.</p>',
        'twitter': 'mattrestivo'
      },{
        'speakerId': 19,
        'firstName': 'Alyssa',
        'lastName': 'Meritt',
        'company': 'Urban Airship',
        'jobTitle': 'Head of Strategic Consulting',
        'bio': '<p>As Head of Strategic Consulting at Urban Airship, Alyssa leads a team of consultants that deliver tailored, digital marketing strategies to enterprise clients in order to increase mobile app engagement and grow business ROI. Strategy sessions use research, trends and data on markets, consumers and culture, to define app and messaging strategies and KPIs, and ultimately inspire clients to incorporate a profitable relationship-based mobile strategy into their core marketing mix.</p><p>Alyssa\'s client experience spans a diverse set of vertical industries, including brands such as The Times, Starwood, CBS, the NBA, NASCAR, Virgin Atlantic, Bank of America, BCBS, Dunkin\' Donuts, PayPal, Caesar\'s Entertainment, Abercrombie + Fitch, Neiman Marcus, Novartis, Biogen, and Comcast. Prior to Urban Airship, Alyssa was Vice President Marketing at DigitasLBi She has over 15 years experience in creating innovative mobile and web-based applications and user-centric digital experiences from roles at various advertising and digital media companies on the agency-side, client-side and as an entrepreneur.</p>',
        'twitter': ''
      },{
        'speakerId': 20,
        'firstName': 'Chieh',
        'lastName': 'Huang',
        'company': 'Boxed',
        'jobTitle': 'CEO',
        'bio': '',
        'twitter': ''
      },{
        'speakerId': 21,
        'firstName': 'Jenna',
        'lastName': 'Owens',
        'company': 'Google Shopping Express',
        'jobTitle': 'GM Operations',
        'bio': '',
        'twitter': ''
      },{
        'speakerId': 22,
        'firstName': 'Bianca',
        'lastName': 'Chen',
        'company': 'Thomson Reuters',
        'jobTitle': 'Finance Correspondent',
        'bio': '',
        'twitter': ''
      }
    ];
    $scope.currentSpeaker = -1;
    $scope.setDialog = function() {
      $scope.currentSpeaker = this.speaker.speakerId;
    };
  });
