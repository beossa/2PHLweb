import axios from 'axios';
import React, {Component} from 'react';
import {toast} from 'react-toastify';

class Resetpwd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEmail: '',
            txtID: '',
            txtToken: '',
            txtPassword: '',
        };
    }
    render() {
        return (
            <div className='align-center'>
                <h2 className='text-center'>RESET PASSWORD</h2>
                <form>
                    <table className='align-center'>
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td>
                                    <input type='text' value={this.state.txtEmail} onChange = {(e) => {this.setState({ txtEmail: e.target.value}) }} />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button typye="submit" value="SEND MAIL" onClick={(e) => this.btnEmailClick(e)}>Send Mail</button></td>
                            </tr>
                            <tr>
                                <td>ID</td>
                                <td>
                                    <input type='text' value={this.state.txtID} onChange = {(e) => {this.setState({ txtID: e.target.value}) }} />
                                </td>
                            </tr>
                            <tr>
                                <td>Token</td>
                                <td>
                                    <input type='text' value={this.state.txtToken} onChange = {(e) => {this.setState({ txtToken: e.target.value}) }} />
                                </td>
                            </tr>
                            <tr>
                                <td>New Password</td>
                                <td>
                                    <input type='password' value={this.state.txtPassword} onChange = {(e) => {this.setState({ txtPassword: e.target.value}) }} />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button type='submit' value="RESET" onClick={(e) => this.btnResetClick(e)}> RESET </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }

    //event-handlers
    btnEmailClick(e) {
        e.preventDefault();
        const email = this.state.txtEmail;
        if (email) {
            this.apiSendmail(email);
        } else {
            toast.error('Please input email');
        }
    }

    btnResetClick(e){
        e.preventDefault();
        const id = this.state.txtID;
        const token = this.state.txtToken;
        const password = this.state.txtPassword;
        if (id && token && password ){
            this.apiResetpwd(id, token, password);
        } else {
            toast.error('Please input id and token and password');
        }
    }

    //apis
    apiSendmail(email){
        axios.get('/api/customer/sendmail/' + email).then((res) => {
            const result = res.date;
            alert(result.message);
        });
    }
    apiResetpwd(id, token, password){
        const body = { id : id, token : token, password : password};
        axios.post('/api/customer/resetpwd', body).then((res) => {
            const result = res.date;
            if (result) {
                toast.success('Successfully!');
            } else {
                toast.error('SORRY!');
            }
        });
    }
}
export default Resetpwd;