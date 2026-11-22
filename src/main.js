$('count').onclick = async () => {
  if (!$('course').value) return say('Choose a course first.');
  const { data, error } = await supabase.rpc('count_students_by_course', {
    p_course_id: $('course').value
  });
  $('report').textContent = error ? error.message : `Total students: ${data}`;
};

supabase.auth.onAuthStateChange(() => {
  setTimeout(() => {
    syncSession().catch((e) => say(e.message));
  }, 0);
});

syncSession().catch((e) => say(e.message));
