angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})



.controller('MyCtrl', function($scope) {

  $scope.categories_chinese = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - ","Airline -","Arrivals -","Board -","Boarding pass -","Boarding time -","Book a ticket -","Business class -","Economy class -","First class -","Carry on (luggage) -","Check in -","Baggage claim -","Customs -","Delayed -","Departures -"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - ","My name is - ","Good morning -","Good afternoon -","Good evening -","Welcome -","Nice to meet you","How are you? -","I'm fine, thanks -","Business class -","Good -","Thank you -","You're welcome -","I don't understand - ","Good bye -"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - ","Can you help me? -","Where is the washroom? -","Go straight -","Left - ","Right -","I'm looking for -","Come with me -","Taxi -","Bus -","Train -","Map -","Guide - "] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - ","Can I book a room? -","Do you have any vacancies? - ","What's the cost per night? - ","Double room -","Single room -","Elevator - ","Lobby -","Manager -","Room service -","Guest -","Air-conditioned -","May I see the room? -","I don't like this room -","Is there anything cheaper? - "] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - ","Breakfast - ","Lunch - ","Dinner - ","Is there an available table? - ","Menu - ","Waiter - ","What do you recommend? - ","I would like the... - ","Beverage - ","Food - ","Spoon - ","Fork - ","Knife - ","Spicy - ","The bill, please - ","Thank you - "] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - ","Shopping mall - ","Market - ","How much does it cost? - ","Cash - ","Credit - ","I'm just looking - ","Can you help me? - ","Bakery - ","Butcher - ","Newsstand - ","Clothing store - ","Souvenir - ","Receipt - ","Changing room - ","It's too expensive - ","Do you have anything cheaper? - ","Thank you - "] }
  ];
  $scope.categories_french = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - ","Airline -","Arrivals -","Board -","Boarding pass -","Boarding time -","Book a ticket -","Business class -","Economy class -","First class -","Carry on (luggage) -","Check in -","Baggage claim -","Customs -","Delayed -","Departures -"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - ","My name is - ","Good morning -","Good afternoon -","Good evening -","Welcome -","Nice to meet you","How are you? -","I'm fine, thanks -","Business class -","Good -","Thank you -","You're welcome -","I don't understand - ","Good bye -"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - ","Can you help me? -","Where is the washroom? -","Go straight -","Left - ","Right -","I'm looking for -","Come with me -","Taxi -","Bus -","Train -","Map -","Guide - "] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - ","Can I book a room? -","Do you have any vacancies? - ","What's the cost per night? - ","Double room -","Single room -","Elevator - ","Lobby -","Manager -","Room service -","Guest -","Air-conditioned -","May I see the room? -","I don't like this room -","Is there anything cheaper? - "] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - ","Breakfast - ","Lunch - ","Dinner - ","Is there an available table? - ","Menu - ","Waiter - ","What do you recommend? - ","I would like the... - ","Beverage - ","Food - ","Spoon - ","Fork - ","Knife - ","Spicy - ","The bill, please - ","Thank you - "] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - ","Shopping mall - ","Market - ","How much does it cost? - ","Cash - ","Credit - ","I'm just looking - ","Can you help me? - ","Bakery - ","Butcher - ","Newsstand - ","Clothing store - ","Souvenir - ","Receipt - ","Changing room - ","It's too expensive - ","Do you have anything cheaper? - ","Thank you - "] }
  ];
  $scope.categories_german = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - ","Airline -","Arrivals -","Board -","Boarding pass -","Boarding time -","Book a ticket -","Business class -","Economy class -","First class -","Carry on (luggage) -","Check in -","Baggage claim -","Customs -","Delayed -","Departures -"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - ","My name is - ","Good morning -","Good afternoon -","Good evening -","Welcome -","Nice to meet you","How are you? -","I'm fine, thanks -","Business class -","Good -","Thank you -","You're welcome -","I don't understand - ","Good bye -"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - ","Can you help me? -","Where is the washroom? -","Go straight -","Left - ","Right -","I'm looking for -","Come with me -","Taxi -","Bus -","Train -","Map -","Guide - "] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - ","Can I book a room? -","Do you have any vacancies? - ","What's the cost per night? - ","Double room -","Single room -","Elevator - ","Lobby -","Manager -","Room service -","Guest -","Air-conditioned -","May I see the room? -","I don't like this room -","Is there anything cheaper? - "] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - ","Breakfast - ","Lunch - ","Dinner - ","Is there an available table? - ","Menu - ","Waiter - ","What do you recommend? - ","I would like the... - ","Beverage - ","Food - ","Spoon - ","Fork - ","Knife - ","Spicy - ","The bill, please - ","Thank you - "] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - ","Shopping mall - ","Market - ","How much does it cost? - ","Cash - ","Credit - ","I'm just looking - ","Can you help me? - ","Bakery - ","Butcher - ","Newsstand - ","Clothing store - ","Souvenir - ","Receipt - ","Changing room - ","It's too expensive - ","Do you have anything cheaper? - ","Thank you - "] }
  ];
  $scope.categories_italian = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - ","Airline -","Arrivals -","Board -","Boarding pass -","Boarding time -","Book a ticket -","Business class -","Economy class -","First class -","Carry on (luggage) -","Check in -","Baggage claim -","Customs -","Delayed -","Departures -"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - ","My name is - ","Good morning -","Good afternoon -","Good evening -","Welcome -","Nice to meet you","How are you? -","I'm fine, thanks -","Business class -","Good -","Thank you -","You're welcome -","I don't understand - ","Good bye -"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - ","Can you help me? -","Where is the washroom? -","Go straight -","Left - ","Right -","I'm looking for -","Come with me -","Taxi -","Bus -","Train -","Map -","Guide - "] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - ","Can I book a room? -","Do you have any vacancies? - ","What's the cost per night? - ","Double room -","Single room -","Elevator - ","Lobby -","Manager -","Room service -","Guest -","Air-conditioned -","May I see the room? -","I don't like this room -","Is there anything cheaper? - "] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - ","Breakfast - ","Lunch - ","Dinner - ","Is there an available table? - ","Menu - ","Waiter - ","What do you recommend? - ","I would like the... - ","Beverage - ","Food - ","Spoon - ","Fork - ","Knife - ","Spicy - ","The bill, please - ","Thank you - "] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - ","Shopping mall - ","Market - ","How much does it cost? - ","Cash - ","Credit - ","I'm just looking - ","Can you help me? - ","Bakery - ","Butcher - ","Newsstand - ","Clothing store - ","Souvenir - ","Receipt - ","Changing room - ","It's too expensive - ","Do you have anything cheaper? - ","Thank you - "] }
  ];
  $scope.categories_japanese = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - ","Airline -","Arrivals -","Board -","Boarding pass -","Boarding time -","Book a ticket -","Business class -","Economy class -","First class -","Carry on (luggage) -","Check in -","Baggage claim -","Customs -","Delayed -","Departures -"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - ","My name is - ","Good morning -","Good afternoon -","Good evening -","Welcome -","Nice to meet you","How are you? -","I'm fine, thanks -","Business class -","Good -","Thank you -","You're welcome -","I don't understand - ","Good bye -"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - ","Can you help me? -","Where is the washroom? -","Go straight -","Left - ","Right -","I'm looking for -","Come with me -","Taxi -","Bus -","Train -","Map -","Guide - "] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - ","Can I book a room? -","Do you have any vacancies? - ","What's the cost per night? - ","Double room -","Single room -","Elevator - ","Lobby -","Manager -","Room service -","Guest -","Air-conditioned -","May I see the room? -","I don't like this room -","Is there anything cheaper? - "] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - ","Breakfast - ","Lunch - ","Dinner - ","Is there an available table? - ","Menu - ","Waiter - ","What do you recommend? - ","I would like the... - ","Beverage - ","Food - ","Spoon - ","Fork - ","Knife - ","Spicy - ","The bill, please - ","Thank you - "] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - ","Shopping mall - ","Market - ","How much does it cost? - ","Cash - ","Credit - ","I'm just looking - ","Can you help me? - ","Bakery - ","Butcher - ","Newsstand - ","Clothing store - ","Souvenir - ","Receipt - ","Changing room - ","It's too expensive - ","Do you have anything cheaper? - ","Thank you - "] }
  ];
  $scope.categories_russian = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - ","Airline -","Arrivals -","Board -","Boarding pass -","Boarding time -","Book a ticket -","Business class -","Economy class -","First class -","Carry on (luggage) -","Check in -","Baggage claim -","Customs -","Delayed -","Departures -"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - ","My name is - ","Good morning -","Good afternoon -","Good evening -","Welcome -","Nice to meet you","How are you? -","I'm fine, thanks -","Business class -","Good -","Thank you -","You're welcome -","I don't understand - ","Good bye -"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - ","Can you help me? -","Where is the washroom? -","Go straight -","Left - ","Right -","I'm looking for -","Come with me -","Taxi -","Bus -","Train -","Map -","Guide - "] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - ","Can I book a room? -","Do you have any vacancies? - ","What's the cost per night? - ","Double room -","Single room -","Elevator - ","Lobby -","Manager -","Room service -","Guest -","Air-conditioned -","May I see the room? -","I don't like this room -","Is there anything cheaper? - "] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - ","Breakfast - ","Lunch - ","Dinner - ","Is there an available table? - ","Menu - ","Waiter - ","What do you recommend? - ","I would like the... - ","Beverage - ","Food - ","Spoon - ","Fork - ","Knife - ","Spicy - ","The bill, please - ","Thank you - "] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - ","Shopping mall - ","Market - ","How much does it cost? - ","Cash - ","Credit - ","I'm just looking - ","Can you help me? - ","Bakery - ","Butcher - ","Newsstand - ","Clothing store - ","Souvenir - ","Receipt - ","Changing room - ","It's too expensive - ","Do you have anything cheaper? - ","Thank you - "] }
  ];
  $scope.categories_spanish = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - ","Airline -","Arrivals -","Board -","Boarding pass -","Boarding time -","Book a ticket -","Business class -","Economy class -","First class -","Carry on (luggage) -","Check in -","Baggage claim -","Customs -","Delayed -","Departures -"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - ","My name is - ","Good morning -","Good afternoon -","Good evening -","Welcome -","Nice to meet you","How are you? -","I'm fine, thanks -","Business class -","Good -","Thank you -","You're welcome -","I don't understand - ","Good bye -"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - ","Can you help me? -","Where is the washroom? -","Go straight -","Left - ","Right -","I'm looking for -","Come with me -","Taxi -","Bus -","Train -","Map -","Guide - "] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - ","Can I book a room? -","Do you have any vacancies? - ","What's the cost per night? - ","Double room -","Single room -","Elevator - ","Lobby -","Manager -","Room service -","Guest -","Air-conditioned -","May I see the room? -","I don't like this room -","Is there anything cheaper? - "] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - ","Breakfast - ","Lunch - ","Dinner - ","Is there an available table? - ","Menu - ","Waiter - ","What do you recommend? - ","I would like the... - ","Beverage - ","Food - ","Spoon - ","Fork - ","Knife - ","Spicy - ","The bill, please - ","Thank you - "] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - ","Shopping mall - ","Market - ","How much does it cost? - ","Cash - ","Credit - ","I'm just looking - ","Can you help me? - ","Bakery - ","Butcher - ","Newsstand - ","Clothing store - ","Souvenir - ","Receipt - ","Changing room - ","It's too expensive - ","Do you have anything cheaper? - ","Thank you - "] }
  ];
  $scope.categories_turkish = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - ","Airline -","Arrivals -","Board -","Boarding pass -","Boarding time -","Book a ticket -","Business class -","Economy class -","First class -","Carry on (luggage) -","Check in -","Baggage claim -","Customs -","Delayed -","Departures -"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - ","My name is - ","Good morning -","Good afternoon -","Good evening -","Welcome -","Nice to meet you","How are you? -","I'm fine, thanks -","Business class -","Good -","Thank you -","You're welcome -","I don't understand - ","Good bye -"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - ","Can you help me? -","Where is the washroom? -","Go straight -","Left - ","Right -","I'm looking for -","Come with me -","Taxi -","Bus -","Train -","Map -","Guide - "] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - ","Can I book a room? -","Do you have any vacancies? - ","What's the cost per night? - ","Double room -","Single room -","Elevator - ","Lobby -","Manager -","Room service -","Guest -","Air-conditioned -","May I see the room? -","I don't like this room -","Is there anything cheaper? - "] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - ","Breakfast - ","Lunch - ","Dinner - ","Is there an available table? - ","Menu - ","Waiter - ","What do you recommend? - ","I would like the... - ","Beverage - ","Food - ","Spoon - ","Fork - ","Knife - ","Spicy - ","The bill, please - ","Thank you - "] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - ","Shopping mall - ","Market - ","How much does it cost? - ","Cash - ","Credit - ","I'm just looking - ","Can you help me? - ","Bakery - ","Butcher - ","Newsstand - ","Clothing store - ","Souvenir - ","Receipt - ","Changing room - ","It's too expensive - ","Do you have anything cheaper? - ","Thank you - "] }
  ];


  $scope.toggleCategory = function(category) {
    if ($scope.isCategoryShown(category)) {
      $scope.shownCategory = null;
    } else {
      $scope.shownCategory = category;
    }
  };
  $scope.isCategoryShown = function(category) {
    return $scope.shownCategory === category;
  };
});