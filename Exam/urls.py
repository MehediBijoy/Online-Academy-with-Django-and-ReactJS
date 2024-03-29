from django.urls import path
from .views import createExamAPIView, ExamListAPIView, QuestionAPIView, participantAPIView, participantListAPIView

urlpatterns = [
    path('api/classroom/exam/create/', createExamAPIView.as_view()),
    path('api/classroom/exam/list/participants/', participantAPIView.as_view()),
    path('api/classroom/exam/list/participants/<int:id>/', participantListAPIView.as_view()),
    path('api/classroom/exam/questions/<int:class_id>/<str:quiz>/', QuestionAPIView.as_view()),
    path('api/classroom/exam/list/<int:id>/', ExamListAPIView.as_view())
]
