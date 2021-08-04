import toastr from 'toastr';
import 'toastr/build/toastr.css';


toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

export default {
    // successRequest() {
    //     toastr["info"](`Succes. Found ${someWords.total_results} movies`)
    // },

    incorrectRequest() {
        toastr["error"]("Search result not successful. Enter the correct request!");
    },

    fetchError() {
        toastr["error"]("Something went wrong. Please, try again!");
    },

    addToWatched() {
        toastr["info"]("This film added to Watched");
    },
    removeFromWatched() {
        toastr["info"]("This movie successfully removed from Watched");
    },

    addToQueue() {
        toastr["info"]("This film added to Queue");
    },
    removeFromQueue() {
        toastr["info"]("This movie successfully removed from Queue");
    },

    addToWatchedError() {
        toastr["warning"]("This film has already been added to Watched");
    },
    addToQueueError() {
        toastr["warning"]("This film has already been added to Queue");
    },

}