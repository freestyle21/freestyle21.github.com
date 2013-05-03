jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(A,B,C,D,E){return jQuery.easing[jQuery.easing.def](A,B,C,D,E)},easeInQuad:function(A,B,C,D,E){return D*(B/=E)*B+C},easeOutQuad:function(A,B,C,D,E){return -D*(B/=E)*(B-2)+C},easeInOutQuad:function(A,B,C,D,E){if((B/=E/2)<1){return D/2*B*B+C}return -D/2*((--B)*(B-2)-1)+C},easeInCubic:function(A,B,C,D,E){return D*(B/=E)*B*B+C},easeOutCubic:function(A,B,C,D,E){return D*((B=B/E-1)*B*B+1)+C},easeInOutCubic:function(A,B,C,D,E){if((B/=E/2)<1){return D/2*B*B*B+C}return D/2*((B-=2)*B*B+2)+C},easeInQuart:function(A,B,C,D,E){return D*(B/=E)*B*B*B+C},easeOutQuart:function(A,B,C,D,E){return -D*((B=B/E-1)*B*B*B-1)+C},easeInOutQuart:function(A,B,C,D,E){if((B/=E/2)<1){return D/2*B*B*B*B+C}return -D/2*((B-=2)*B*B*B-2)+C},easeInQuint:function(A,B,C,D,E){return D*(B/=E)*B*B*B*B+C},easeOutQuint:function(A,B,C,D,E){return D*((B=B/E-1)*B*B*B*B+1)+C},easeInOutQuint:function(A,B,C,D,E){if((B/=E/2)<1){return D/2*B*B*B*B*B+C}return D/2*((B-=2)*B*B*B*B+2)+C},easeInSine:function(A,B,C,D,E){return -D*Math.cos(B/E*(Math.PI/2))+D+C},easeOutSine:function(A,B,C,D,E){return D*Math.sin(B/E*(Math.PI/2))+C},easeInOutSine:function(A,B,C,D,E){return -D/2*(Math.cos(Math.PI*B/E)-1)+C},easeInExpo:function(A,B,C,D,E){return(B==0)?C:D*Math.pow(2,10*(B/E-1))+C},easeOutExpo:function(A,B,C,D,E){return(B==E)?C+D:D*(-Math.pow(2,-10*B/E)+1)+C},easeInOutExpo:function(A,B,C,D,E){if(B==0){return C}if(B==E){return C+D}if((B/=E/2)<1){return D/2*Math.pow(2,10*(B-1))+C}return D/2*(-Math.pow(2,-10*--B)+2)+C},easeInCirc:function(A,B,C,D,E){return -D*(Math.sqrt(1-(B/=E)*B)-1)+C},easeOutCirc:function(A,B,C,D,E){return D*Math.sqrt(1-(B=B/E-1)*B)+C},easeInOutCirc:function(A,B,C,D,E){if((B/=E/2)<1){return -D/2*(Math.sqrt(1-B*B)-1)+C}return D/2*(Math.sqrt(1-(B-=2)*B)+1)+C},easeInElastic:function(A,H,C,D,E){var G=1.70158;var F=0;var B=D;if(H==0){return C}if((H/=E)==1){return C+D}if(!F){F=E*0.3}if(B<Math.abs(D)){B=D;var G=F/4}else{var G=F/(2*Math.PI)*Math.asin(D/B)}return -(B*Math.pow(2,10*(H-=1))*Math.sin((H*E-G)*(2*Math.PI)/F))+C},easeOutElastic:function(A,H,C,D,E){var G=1.70158;var F=0;var B=D;if(H==0){return C}if((H/=E)==1){return C+D}if(!F){F=E*0.3}if(B<Math.abs(D)){B=D;var G=F/4}else{var G=F/(2*Math.PI)*Math.asin(D/B)}return B*Math.pow(2,-10*H)*Math.sin((H*E-G)*(2*Math.PI)/F)+D+C},easeInOutElastic:function(A,H,C,D,E){var G=1.70158;var F=0;var B=D;if(H==0){return C}if((H/=E/2)==2){return C+D}if(!F){F=E*(0.3*1.5)}if(B<Math.abs(D)){B=D;var G=F/4}else{var G=F/(2*Math.PI)*Math.asin(D/B)}if(H<1){return -0.5*(B*Math.pow(2,10*(H-=1))*Math.sin((H*E-G)*(2*Math.PI)/F))+C}return B*Math.pow(2,-10*(H-=1))*Math.sin((H*E-G)*(2*Math.PI)/F)*0.5+D+C},easeInBack:function(A,B,C,D,E,F){if(F==undefined){F=1.70158}return D*(B/=E)*B*((F+1)*B-F)+C},easeOutBack:function(A,B,C,D,E,F){if(F==undefined){F=1.70158}return D*((B=B/E-1)*B*((F+1)*B+F)+1)+C},easeInOutBack:function(A,B,C,D,E,F){if(F==undefined){F=1.70158}if((B/=E/2)<1){return D/2*(B*B*(((F*=(1.525))+1)*B-F))+C}return D/2*((B-=2)*B*(((F*=(1.525))+1)*B+F)+2)+C},easeInBounce:function(A,B,C,D,E){return D-jQuery.easing.easeOutBounce(A,E-B,0,D,E)+C},easeOutBounce:function(A,B,C,D,E){if((B/=E)<(1/2.75)){return D*(7.5625*B*B)+C}else{if(B<(2/2.75)){return D*(7.5625*(B-=(1.5/2.75))*B+0.75)+C}else{if(B<(2.5/2.75)){return D*(7.5625*(B-=(2.25/2.75))*B+0.9375)+C}else{return D*(7.5625*(B-=(2.625/2.75))*B+0.984375)+C}}}},easeInOutBounce:function(A,B,C,D,E){if(B<E/2){return jQuery.easing.easeInBounce(A,B*2,0,D,E)*0.5+C}return jQuery.easing.easeOutBounce(A,B*2-E,0,D,E)*0.5+D*0.5+C}});jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(F,G,H,I,J){return jQuery.easing[jQuery.easing.def](F,G,H,I,J)},easeInQuad:function(F,G,H,I,J){return I*(G/=J)*G+H},easeOutQuad:function(F,G,H,I,J){return -I*(G/=J)*(G-2)+H},easeInOutQuad:function(F,G,H,I,J){if((G/=J/2)<1){return I/2*G*G+H}return -I/2*((--G)*(G-2)-1)+H},easeInCubic:function(F,G,H,I,J){return I*(G/=J)*G*G+H},easeOutCubic:function(F,G,H,I,J){return I*((G=G/J-1)*G*G+1)+H},easeInOutCubic:function(F,G,H,I,J){if((G/=J/2)<1){return I/2*G*G*G+H}return I/2*((G-=2)*G*G+2)+H},easeInQuart:function(F,G,H,I,J){return I*(G/=J)*G*G*G+H},easeOutQuart:function(F,G,H,I,J){return -I*((G=G/J-1)*G*G*G-1)+H},easeInOutQuart:function(F,G,H,I,J){if((G/=J/2)<1){return I/2*G*G*G*G+H}return -I/2*((G-=2)*G*G*G-2)+H},easeInQuint:function(F,G,H,I,J){return I*(G/=J)*G*G*G*G+H},easeOutQuint:function(F,G,H,I,J){return I*((G=G/J-1)*G*G*G*G+1)+H},easeInOutQuint:function(F,G,H,I,J){if((G/=J/2)<1){return I/2*G*G*G*G*G+H}return I/2*((G-=2)*G*G*G*G+2)+H},easeInSine:function(F,G,H,I,J){return -I*Math.cos(G/J*(Math.PI/2))+I+H},easeOutSine:function(F,G,H,I,J){return I*Math.sin(G/J*(Math.PI/2))+H},easeInOutSine:function(F,G,H,I,J){return -I/2*(Math.cos(Math.PI*G/J)-1)+H},easeInExpo:function(F,G,H,I,J){return(G==0)?H:I*Math.pow(2,10*(G/J-1))+H},easeOutExpo:function(F,G,H,I,J){return(G==J)?H+I:I*(-Math.pow(2,-10*G/J)+1)+H},easeInOutExpo:function(F,G,H,I,J){if(G==0){return H}if(G==J){return H+I}if((G/=J/2)<1){return I/2*Math.pow(2,10*(G-1))+H}return I/2*(-Math.pow(2,-10*--G)+2)+H},easeInCirc:function(F,G,H,I,J){return -I*(Math.sqrt(1-(G/=J)*G)-1)+H},easeOutCirc:function(F,G,H,I,J){return I*Math.sqrt(1-(G=G/J-1)*G)+H},easeInOutCirc:function(F,G,H,I,J){if((G/=J/2)<1){return -I/2*(Math.sqrt(1-G*G)-1)+H}return I/2*(Math.sqrt(1-(G-=2)*G)+1)+H},easeInElastic:function(P,O,J,K,L){var N=1.70158;var M=0;var I=K;if(O==0){return J}if((O/=L)==1){return J+K}if(!M){M=L*0.3}if(I<Math.abs(K)){I=K;var N=M/4}else{var N=M/(2*Math.PI)*Math.asin(K/I)}return -(I*Math.pow(2,10*(O-=1))*Math.sin((O*L-N)*(2*Math.PI)/M))+J},easeOutElastic:function(P,O,J,K,L){var N=1.70158;var M=0;var I=K;if(O==0){return J}if((O/=L)==1){return J+K}if(!M){M=L*0.3}if(I<Math.abs(K)){I=K;var N=M/4}else{var N=M/(2*Math.PI)*Math.asin(K/I)}return I*Math.pow(2,-10*O)*Math.sin((O*L-N)*(2*Math.PI)/M)+K+J},easeInOutElastic:function(P,O,J,K,L){var N=1.70158;var M=0;var I=K;if(O==0){return J}if((O/=L/2)==2){return J+K}if(!M){M=L*(0.3*1.5)}if(I<Math.abs(K)){I=K;var N=M/4}else{var N=M/(2*Math.PI)*Math.asin(K/I)}if(O<1){return -0.5*(I*Math.pow(2,10*(O-=1))*Math.sin((O*L-N)*(2*Math.PI)/M))+J}return I*Math.pow(2,-10*(O-=1))*Math.sin((O*L-N)*(2*Math.PI)/M)*0.5+K+J},easeInBack:function(G,H,I,J,K,L){if(L==undefined){L=1.70158}return J*(H/=K)*H*((L+1)*H-L)+I},easeOutBack:function(G,H,I,J,K,L){if(L==undefined){L=1.70158}return J*((H=H/K-1)*H*((L+1)*H+L)+1)+I},easeInOutBack:function(G,H,I,J,K,L){if(L==undefined){L=1.70158}if((H/=K/2)<1){return J/2*(H*H*(((L*=(1.525))+1)*H-L))+I}return J/2*((H-=2)*H*(((L*=(1.525))+1)*H+L)+2)+I},easeInBounce:function(F,G,H,I,J){return I-jQuery.easing.easeOutBounce(F,J-G,0,I,J)+H},easeOutBounce:function(F,G,H,I,J){if((G/=J)<(1/2.75)){return I*(7.5625*G*G)+H}else{if(G<(2/2.75)){return I*(7.5625*(G-=(1.5/2.75))*G+0.75)+H}else{if(G<(2.5/2.75)){return I*(7.5625*(G-=(2.25/2.75))*G+0.9375)+H}else{return I*(7.5625*(G-=(2.625/2.75))*G+0.984375)+H}}}},easeInOutBounce:function(F,G,H,I,J){if(G<J/2){return jQuery.easing.easeInBounce(F,G*2,0,I,J)*0.5+H}return jQuery.easing.easeOutBounce(F,G*2-J,0,I,J)*0.5+I*0.5+H}});