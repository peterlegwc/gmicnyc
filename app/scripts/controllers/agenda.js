'use strict';

/**
 * @ngdoc function
 * @name gmicnycApp.controller:AgendaCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the gmicnycApp
 */
angular.module('gmicnycApp')
  .controller('AgendaCtrl', function ($scope) {
    $scope.agenda = [
      {
        'title': 'Opening',
        'startTime': '2015-06-11 09:30:00',
        'endTime': '2015-06-11 09:35:00',
        'description': '',
        'topic': '',
        'moderator': '',
        'speakers': '',
        'format': 'Event'
      }, {
        'title': 'Why Companies Must Invest in the Customer Experience',
        'startTime': '2015-06-11 09:35:00',
        'endTime': '2015-06-11 09:55:00',
        'description': '',
        'topic': '',
        'moderator': '',
        'speakers': [
          {
            'id': 14,
            'firstname': 'Alex',
            'lastname': 'Wang',
            'company': 'Baidu',
            'title': 'Head of New Product',
            'picture': '/images/speakers/alex-wang.jpg',
            'bio': ''
          }
        ],
        'format': 'Presentation'
      }, {
        'title': 'Brands and Customer Engagement',
        'startTime': '2015-06-11 10:00:00',
        'endTime': '2015-06-11 10:50:00',
        'description': '',
        'moderator': '',
        'speakers': [
          {
            'id': 3,
            'firstname': 'David',
            'lastname': 'Berkowitz',
            'company': 'MRY',
            'title': 'Chief Marketing Officer',
            'picture': '/images/speakers/david-berkowitz.jpg',
            'bio': 'David Berkowitz is Chief Marketing Officer at agency MRY, a division of Publicis Groupe, where he directs the agency\'s communications and gains visibility for clients such as Visa, Johnson & Johnson, and Coca-Cola. Previously, he spent seven years at 360i, serving as Vice President of Emerging Media; he co-founded its social media practice and led its Startup Outlook initiative. David has contributed more than 500 columns to outlets such as Ad Age, MediaPost, and Mashable, and he has penned his blog MarketersStudio.com since 2005. He has spoken at more than 250 events globally, including a commencement address at his alma mater, Binghamton University.'
          },{
            'id': 6,
            'firstname': 'Teal',
            'lastname': 'Newland',
            'company': 'StumbleUpon',
            'title': 'VP of Marketing, Revenue, Partnerships',
            'picture': '/images/speakers/teal-newland.jpg',
            'bio': ''
          },{
            'id': 4,
            'firstname': 'Jeff',
            'lastname': 'Arbour',
            'company': 'Plyfe',
            'title': 'Co-founder & CMO',
            'picture': '/images/speakers/jeff-arbour.jpg',
            'bio': ''
          }
        ],
        'format': 'Panel'
      }, {
        'title': 'Coffee Break',
        'startTime': '2015-06-11 10:50:00',
        'endTime': '2015-06-11 11:00:00',
        'description': '10 minute coffee break',
        'topic': 'Break',
        'moderator': '',
        'speakers': '',
        'format': 'Break'
      }, {
        'title': 'All About Content? Pieces to the Contextualization Puzzle',
        'startTime': '2015-06-11 11:00:00',
        'endTime': '2015-06-11 11:50:00',
        'description': '',
        'topic': 'Contextualization, Omni-channel, User Experience, Personlization, Multi-channel',
        'moderator': {
          'id': 12,
          'firstname': 'Yev',
          'lastname': 'Galper',
          'company': 'EPAM',
          'title': 'Head of Mobile Competency Center',
          'picture': '/images/speakers/yev-galper.jpg',
          'bio': ''
        },
        'speakers': [
          {
            'id': 2,
            'firstname': 'Tyler',
            'lastname': 'McKinley',
            'company': 'MobileRQ',
            'title': 'CEO',
            'picture': '/images/speakers/tyler-mckinley.jpg',
            'bio': ''
          },{
            'id': 8,
            'firstname': 'Jill',
            'lastname': 'Wilson',
            'company': 'SGN',
            'title': 'SVP of Game Development',
            'picture': '/images/speakers/jill-wilson.jpg',
            'bio': ''
          },{
            'id': 13,
            'firstname': 'Nick',
            'lastname': 'Rockwell',
            'company': 'Condé Nast',
            'title': 'CTO',
            'picture': '/images/speakers/nick-rockwell.jpg',
            'bio': ''
          }
        ],
        'format': 'Panel'
      }, {
        'title': 'Mobile Wallet',
        'startTime': '2015-06-11 11:50:00',
        'endTime': '2015-06-11 12:30:00',
        'description': '',
        'topic': '',
        'moderator': '',
        'speakers': '',
        'format': 'Presentation'
      }, {
        'title': 'Lunch',
        'startTime': '2015-06-11 12:30:00',
        'endTime': '2015-06-11 13:15:00',
        'description': 'Lunch Break',
        'topic': 'Break',
        'moderator': '',
        'speakers': '',
        'format': 'Break'
      }, {
        'title': 'SoLoMo Marketing',
        'startTime': '2015-06-11 13:15:00',
        'endTime': '2015-06-11 13:45:00',
        'description': '',
        'topic': '',
        'moderator': '',
        'speakers': '',
        'format': 'Presentation'
      }, {
        'title': 'Making Beacons Work for You',
        'startTime': '2015-06-11 13:50:00',
        'endTime': '2015-06-11 14:40:00',
        'description': '',
        'topic': 'Beacons, Real Time Retail',
        'moderator': {
          'id': 9,
          'firstname': 'Dan',
          'lastname': 'Herman',
          'company': 'ChatID',
          'title': 'Founder & CEO',
          'picture': '/images/speakers/dan-herman.jpg',
          'bio': ''
        },
        'speakers': [
          {
            'id': 11,
            'firstname': 'Ryan',
            'lastname': 'Craver',
            'company': 'Lamour Group',
            'title': 'SVP Emerging Brands, Licensing & Digital',
            'picture': '/images/speakers/ryan-craver.jpg',
            'bio': 'Ryan\'s natural fascination with the intersection of retail and technology has led to a career of inspiring and leading retailers to be on the forefront of the evolving "connected retail" environment. Ryan enjoys tackling changing consumer dynamics and defining how retail organizations and brands can leverage technology to strengthen their competitive position. Ryan currently leads Emerging Brands, Licensing and Digital Strategy for Lamour Group\'s portfolio of global brands while advising several startups focused on Mobile and AdTech. Prior to joining Lamour, Ryan was in charge of the core department store strategy at Lord & Taylor / Hudson\'s Bay Company and was a senior leader at Accenture, driving growth and profit improvement across multiple clients, including Virgin Media, FedEx and Best Buy.'
          },{
            'id': 10,
            'firstname': 'Wesley',
            'lastname': 'Barrow',
            'company': 'Nomi',
            'title': 'Founder',
            'picture': '/images/speakers/wesley-barrow.jpg',
            'bio': ''
          }
        ],
        'format': 'Panel'
      }, {
        'title': 'Digital Media Consumption in 2015',
        'startTime': '2015-06-11 14:45:00',
        'endTime': '2015-06-11 15:20:00',
        'description': '',
        'topic': '',
        'moderator': '',
        'speakers': [
          {
            'id': 16,
            'firstname': 'Brent',
            'lastname': 'Hieggelke',
            'company': 'Urban Airship',
            'title': 'Chief Mobile Evangelist',
            'picture': '/images/speakers/generic-male.png',
            'bio': ''
          }
        ],
        'format': 'Presentation'
      }, {
        'title': 'Coffee Break',
        'startTime': '2015-06-11 15:20:00',
        'endTime': '2015-06-11 15:30:00',
        'description': '10 minute coffee break',
        'topic': 'Break',
        'moderator': '',
        'speakers': '',
        'format': 'Break'
      }, {
        'title': 'Marketing to Millennials: The Holy Grail',
        'startTime': '2015-06-11 15:30:00',
        'endTime': '2015-06-11 16:20:00',
        'description': '',
        'moderator': '',
        'speakers': [
          {
            'id': 1,
            'firstname': 'Ryan',
            'lastname': 'Matzner',
            'company': 'Fueled',
            'title': 'Director & Chief Strategist',
            'picture': '/images/speakers/ryan-matzner.jpg',
            'bio': 'Ryan Matzner is the Director of Strategy at Fueled, a mobile design and development shop based in NYC and London. He has a decade of online and mobile marketing experience, working with clients such as American Express, Condé Nast, Ideeli, Thrillist, HBO, QuizUp, Barneys, and Gilt Groupe. He can be found on Facebook, Twitter, LinkedIn and Google+.'
          },{
            'id': 15,
            'firstname': 'Mark',
            'lastname': 'Egerman',
            'company': 'Cover',
            'title': 'Co-founder',
            'picture': '/images/speakers/generic-male.png',
            'bio': ''
          }
        ],
        'format': 'Panel'
      }, {
        'title': 'Sand Hill Road to Wall Street: VC Perspectives',
        'startTime': '2015-06-11 16:25:00',
        'endTime': '2015-06-11 17:15:00',
        'description': '',
        'topic': 'VCs Perspectives on What Makes a Company Great',
        'moderator': '',
        'speakers': '',
        'format': 'Panel'
      }
    ];
    $scope.parseDate = function(mySqlDate) {
      var d = mySqlDate.split(/[- :]/);
      return new Date(d[0], d[1]-1, d[2], d[3] || 0, d[4] || 0, d[5] || 0);
    };
    $scope.orderByDate = function (item) {
      return $scope.parseDate(item.startTime);
    };
    $scope.toggleDesc = function() {
      this.session.show = !this.session.show;
    };
  });
