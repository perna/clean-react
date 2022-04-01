import { AccountModel } from '../models/account-model'

type AuthenticationParams = {
  email: string
  password: TemplateStringsArray
}

export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel>
}