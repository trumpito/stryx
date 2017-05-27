angular.module('app.directives', [])
.constant('ionic',window.ionic)
.directive('channelPanel', channelPanel)
.directive('activePageHighlight', activePageHighlight)
.factory('channelPanelDelegate',channelPanelDelegate);

channelPanel.$inject = ['ionic', '$rootScope'];
activePageHighlight.$inject = ['$rootScope', '$state'];

function activePageHighlight($rootScope, $state){
    return function ($scope, $element, $attr) {
       
     function checkUISref(){
       if ($state.is($attr['uiSref'])){
             $element.addClass('active-page-highlight');
         } else {
             $element.removeClass('active-page-highlight');
         }
     }
     
     checkUISref();
       
     $rootScope.$on('$stateChangeSuccess', function(){
         checkUISref();
     })
   };
}

function channelPanel(ionic, $rootScope) {
      var ChannelPanelView = ionic.views.View.inherit({
        initialize : function(opts) {
            opts = ionic.extend({},opts);
            ionic.extend(this, opts);
            this.el = opts.el;
            this.el.style.display = 'block';
            this.isOpen = false;
            this.panelAnimDuration = opts.duration;
            this.dstY = opts.dstY;
        },
        setY : function(y) {
            this.el.style[ionic.CSS.TRANSFORM] = 'translate3d(0px,'+ y + 'px, 0)';
        },
        setTransform : function() {
            this.el.style[ionic.CSS.TRANSITION] = '-webkit-transform '+this.panelAnimDuration+'s ease';
        },
        toggle : function() {
            var self = this;
            ionic.requestAnimationFrame(function(){
                self.setTransform();
                if(self.isOpen) {
                    self.setY(self.dstY);
                    self.isOpen = false;
                } else {
                    self.setY(-4);
                    self.isOpen = true;
                }
            });
           
        },
        toggleIfOpen : function() {
            var self = this;
            ionic.requestAnimationFrame(function(){
                if(self.isOpen) {
                    self.toggle();
                }
            });
        },
    });
    
        return {
        restrict : 'E',
        template: '<div class="channelpanel" ng-transclude></div>',
        transclude : true,
        link : function($scope, $element, $attr) {
            $scope.panel = {};
            var el = $element[0];
            var channelPanelView = new ChannelPanelView({
                el: el,
                duration : $attr['duration'] || 0.5,
                dstY : $attr['dstY'] || -105
            });
            $rootScope.$on('channelPanel.toggle',function(){
                channelPanelView.toggle();
            });
            $rootScope.$on('channelPanel.toggleIfOpen',function(){
                channelPanelView.toggleIfOpen();
            });
            $scope.panel = channelPanelView;
        },
    };
}

channelPanelDelegate.$inject = ['$rootScope'];

function channelPanelDelegate($rootScope){
    return {
        togglePanel : function() {
            $rootScope.$emit('channelPanel.toggle');
        },
        togglePanelIfOpen : function() {
            $rootScope.$emit('channelPanel.toggleIfOpen');
        }
    };
}