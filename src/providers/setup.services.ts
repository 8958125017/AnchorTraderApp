import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SetupService {

  constructor(public http: Http) {
    this.http = http;    
    console.log('Hello ServicesProvider Provider');
  }
    
    endpoint_url: string = 'http://198.187.28.200:3000';
   //create new user account
    createUserAccount(SignUpDetail: any) {      
        var response = this.http.post(this.endpoint_url + '/trader/createNewTrader',SignUpDetail ).map(res => res.json());
        return response;
    }

     // verify email
     VerificationEmail(otpDetail: any) {      
       console.log("otpDetail =- = "+JSON.stringify(otpDetail));
        var response = this.http.post(this.endpoint_url + '/trader/verifyEmailAddress',otpDetail ).map(res => res.json());
        return response;
    }
    
    
    //sent Otp To Email Verificatation
     EmailVerifyforAccount(email:any){
       console.log("email = = "+JSON.stringify(email));
          var response =this.http.post(this.endpoint_url +'/trader/sentOtpToEmailVerificatation',email).map(res =>res.json());
          return response;
       } 

     // create login
      createLoginDetail(loginDetail: any) {               
        var response = this.http.post(this.endpoint_url + '/trader/login',loginDetail ).map(res => res.json());
        return response;
    }

   // update current passeword
    changecurrentpasswords(values:any){
     var response =this.http.post(this.endpoint_url +'/trader/updateCurrentPassword',values).map(res =>res.json());
      return response;
    }

    // update current location

     sentLocation( position:any){
        console.log("position = = "+JSON.stringify(position));
        var response =this.http.post(this.endpoint_url +'/trader/updatelocation',position).map(res =>res.json());
        return response;
      }


   // get buy data
     getBuydata() {
        var response =this.http.get(this.endpoint_url +'/trader/getRates').map(res =>res.json());
        return response;
       }

  
    //update price

      updateprice(values:any){
         console.log("btcDetails = = "+JSON.stringify(values));  
         var response = this.http.post(this.endpoint_url + '/trader/buysellupdate',values).map(res => res.json());
        return response;
      }

      //update  Acceptance

        updateAcceptance(userId:any){      
         var response = this.http.get(this.endpoint_url +'/chat/updateAcceptance',userId).map(res => res.json());
         return response;
       }
       
       

      // get chat messages

       getChatMessages(chatId:any){
         console.log("chatId = = "+JSON.stringify(chatId));
         var response = this.http.post(this.endpoint_url +'/chat/getChatMessages',chatId).map(res => res.json());
         return response;
       }

       //send message to traders

       sendMessage(messageDetail:any){        
         var response = this.http.post(this.endpoint_url +'/chat/sendMessage',messageDetail).map(res => res.json());
         return response;
       }
       

       //get friends list
        getfrienlist1(emailId:any){
          console.log("email = = "+JSON.stringify(emailId));
         var response = this.http.post(this.endpoint_url +'/chat/getTradersForUser',emailId).map(res => res.json());
         return response;
        }

      
        // get hard code frienlist 
        // getfrienlist1(){
        //  var response = this.http.get('assets/data/friendList.json').map(res => res.json());
        //  return response;
        // } 
        


         // get hard code frienlist 
        getOldMessage(){
         var response = this.http.get('assets/data/messages.json').map(res => res.json());
         return response;
        } 

    // get hard code frienlist 
        getcurrentMessage(){
         var response = this.http.get('assets/data/currentMessage.json').map(res => res.json());
         return response;
        } 
       

        getUserChats(emailId:any){
         var response = this.http.get(this.endpoint_url +'/chat/getUserChats',emailId).map(res => res.json());
         return response;
       }

        forgotPassword(userDetail: any) {
        var response = this.http.post(this.endpoint_url + '/trader/sentOtpToEmailForgotPassword',userDetail ).map(res => res.json());
        return response;
        }

       forgotPasswordOTP(otp: any) {
          var response = this.http.post(this.endpoint_url + '/trader/verifyOtpToEmailForgotPassord',otp ).map(res => res.json());
          return response;
      }

       updateForgotPassord(newpasswordvalues: any) {
        var response =this.http.post(this.endpoint_url +'/trader/updateForgotPassordAfterVerify',newpasswordvalues).map(res =>res.json());
        return response;
      }
      

       acceptRequest(data: any){
         var response =this.http.post(this.endpoint_url +'/chat/updateAcceptance',data).map(res =>res.json());
         return response;
       }

       rejectRequest(data: any){
         var response =this.http.post(this.endpoint_url +'/chat/updateAcceptance',data).map(res =>res.json());
         return response;
       }
     
}


