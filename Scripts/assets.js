function form_send_event(category=''){var event='';switch (category) {case 'franchise':event='formConsultation';break;case 'tournament_registration':event='formTournament';break;}if (event)(dataLayer=window.dataLayer||[]).push({'eCategory':event,'eAction':'sentForm','event':'GTMForms'});}

document.addEventListener('DOMContentLoaded', function () {
	$(document).ajaxComplete(function(event, xhr, settings) {
		if (xhr.status==200){
			const searchFormType = /form_type=([a-z_]+)/;
			const formType = searchFormType.exec(settings.data);
			if (typeof formType[1]!=='undefined') {
				if (xhr.responseJSON.success==true){
					form_send_event(formType[1]);
				}
			}
		}
	});
});