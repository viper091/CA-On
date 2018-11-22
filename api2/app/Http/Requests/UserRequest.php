<?php

namespace VacinaOnline\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use VacinaOnline\User;
class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        //return false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'name' => 'required', 
            'email' => 'required', 
            'id_cidade' => 'required',          
            'id_estado' => 'required',  
            'data_nascimento' => 'required', 
        ];
    }
}
