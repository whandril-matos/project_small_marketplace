
import { callApiProduct } from './callApi';
import { insert } from './insert'

// Chamada à API e salvamento da informação
let callApiIn = callApiProduct(50, 1);

insert(callApiIn)





