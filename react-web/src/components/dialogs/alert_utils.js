import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000
});


export const tSuccess = ( title ) => Toast.fire({
    title, type: 'success'
});

export const tError = ( title ) => Toast.fire({
    title, type: 'error'
});
