function(doc) {
  if (doc.type == "results" && "job_id" in doc) {
    for (i in doc.chasm_output.factor_of_safety) {
      emit([doc.task_id, doc.job_id, parseInt(i)], doc.chasm_output.factor_of_safety[i]);
    }
  }
}