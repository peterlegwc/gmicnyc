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
        'id': 1,
        'firstname': 'Ryan',
        'lastname': 'Matzner',
        'company': 'Fueled',
        'title': 'Director & Chief Strategist',
        'picture': '/images/speakers/ryan-matzner.jpg',
        'bio': 'Ryan Matzner is the Director of Strategy at Fueled, a mobile design and development shop based in NYC and London. He has a decade of online and mobile marketing experience, working with clients such as American Express, Condé Nast, Ideeli, Thrillist, HBO, QuizUp, Barneys, and Gilt Groupe. He can be found on Facebook, Twitter, LinkedIn and Google+.'
      },{
        'id': 2,
        'firstname': 'Tyler',
        'lastname': 'McKinley',
        'company': 'MobileRQ',
        'title': 'CEO',
        'picture': '/images/speakers/tyler-mckinley.jpg',
        'bio': ''
      },{
        'id': 3,
        'firstname': 'David',
        'lastname': 'Berkowitz',
        'company': 'MRY',
        'title': 'Chief Marketing Officer',
        'picture': '/images/speakers/david-berkowitz.jpg',
        'bio': 'David Berkowitz is Chief Marketing Officer at agency MRY, a division of Publicis Groupe, where he directs the agency\'s communications and gains visibility for clients such as Visa, Johnson & Johnson, and Coca-Cola. Previously, he spent seven years at 360i, serving as Vice President of Emerging Media; he co-founded its social media practice and led its Startup Outlook initiative. David has contributed more than 500 columns to outlets such as Ad Age, MediaPost, and Mashable, and he has penned his blog MarketersStudio.com since 2005. He has spoken at more than 250 events globally, including a commencement address at his alma mater, Binghamton University.'
      },{
        'id': 4,
        'firstname': 'Jeff',
        'lastname': 'Arbour',
        'company': 'Plyfe',
        'title': 'Co-founder & CMO',
        'picture': '/images/speakers/jeff-arbour.jpg',
        'bio': ''
      },{
        'id': 5,
        'firstname': 'Fabio',
        'lastname': 'Sisinni',
        'company': 'Shopkick',
        'title': 'VP Product',
        'picture': '/images/speakers/fabio-sisinni.jpg',
        'bio': ''
      },{
        'id': 6,
        'firstname': 'Teal',
        'lastname': 'Newland',
        'company': 'StumbleUpon',
        'title': 'VP of Marketing, Revenue, Partnerships',
        'picture': '/images/speakers/teal-newland.jpg',
        'bio': ''
      },{
        'id': 7,
        'firstname': 'Steve',
        'lastname': 'Callanan',
        'company': 'Wirewax',
        'title': 'Co-founder & CEO',
        'picture': '/images/speakers/steve-callanan.jpg',
        'bio': 'Steve, an Electronic Engineering major, established his first production company in 2001 producing movie trailers, motion graphics, music videos and commercials; and was also producing over 400 hours of branded, short-form fashion and beauty content for the four biggest lifestyle publishers. He proposed that online video content should be as \'connected\' as the rest of the web; linking pixels to people, products and information was the goal. He engineered the world\'s first shoppable video player which lead to the most powerful interactive video platform to help hundreds of global brands realize their video potential.'
      },{
        'id': 8,
        'firstname': 'Jill',
        'lastname': 'Wilson',
        'company': 'SGN',
        'title': 'SVP of Game Development',
        'picture': '/images/speakers/jill-wilson.jpg',
        'bio': ''
      },{
        'id': 9,
        'firstname': 'Dan',
        'lastname': 'Herman',
        'company': 'ChatID',
        'title': 'Founder & CEO',
        'picture': '/images/speakers/dan-herman.jpg',
        'bio': ''
      },{
        'id': 10,
        'firstname': 'Wesley',
        'lastname': 'Barrow',
        'company': 'Nomi',
        'title': 'Founder',
        'picture': '/images/speakers/wesley-barrow.jpg',
        'bio': ''
      },{
        'id': 11,
        'firstname': 'Ryan',
        'lastname': 'Craver',
        'company': 'Lamour Group',
        'title': 'SVP Emerging Brands, Licensing & Digital',
        'picture': '/images/speakers/ryan-craver.jpg',
        'bio': 'Ryan\'s natural fascination with the intersection of retail and technology has led to a career of inspiring and leading retailers to be on the forefront of the evolving "connected retail" environment. Ryan enjoys tackling changing consumer dynamics and defining how retail organizations and brands can leverage technology to strengthen their competitive position. Ryan currently leads Emerging Brands, Licensing and Digital Strategy for Lamour Group\'s portfolio of global brands while advising several startups focused on Mobile and AdTech. Prior to joining Lamour, Ryan was in charge of the core department store strategy at Lord & Taylor / Hudson\'s Bay Company and was a senior leader at Accenture, driving growth and profit improvement across multiple clients, including Virgin Media, FedEx and Best Buy.'
      },{
        'id': 12,
        'firstname': 'Yev',
        'lastname': 'Galper',
        'company': 'EPAM',
        'title': 'Head of Mobile Competency Center',
        'picture': '/images/speakers/yev-galper.jpg',
        'bio': ''
      },{
        'id': 13,
        'firstname': 'Nick',
        'lastname': 'Rockwell',
        'company': 'Condé Nast',
        'title': 'CTO',
        'picture': '/images/speakers/nick-rockwell.jpg',
        'bio': ''
      },{
        'id': 14,
        'firstname': 'Alex',
        'lastname': 'Wang',
        'company': 'Baidu',
        'title': 'Head of New Product',
        'picture': '/images/speakers/alex-wang.jpg',
        'bio': ''
      },{
        'id': 15,
        'firstname': 'Mark',
        'lastname': 'Egerman',
        'company': 'Cover',
        'title': 'Co-founder',
        'picture': '/images/speakers/mark-egerman.jpg',
        'bio': ''
      },{
        'id': 16,
        'firstname': 'Brent',
        'lastname': 'Hieggelke',
        'company': 'Urban Airship',
        'title': 'Chief Mobile Evangelist',
        'picture': '/images/speakers/brent-hieggelke.jpg',
        'bio': ''
      }
    ];
    $scope.currentSpeaker = -1;
    $scope.setDialog = function() {
      $scope.currentSpeaker = this.speaker.id;
    };
  });
