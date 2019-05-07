from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from django_app.models import Todo

class ViewTestCase(TestCase):
    def test_api_can_get_todos(self):
        self.client = APIClient()
        self.response = self.client.get('/api/todos/', format='json')

        self.assertEqual(self.response.status_code, status.HTTP_200_OK)


    def test_api_todo(self):
        self.client = APIClient()

        # Testign for post
        self.todo_data = {'text': 'This is a unit test', 'dueDate': '2020-05-04', 'status': 'TODO'}
        self.postResponse = self.client.post('/api/todos/', self.todo_data, format='json')

        self.assertEqual(self.postResponse.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Todo.objects.count(), 1)

        # Testing for get
        self.getResponse = self.client.get('/api/todos/1/', format='json')

        self.assertEqual(self.getResponse.status_code, status.HTTP_200_OK)
        self.assertEqual(self.getResponse.data, {'id': 1, 'text': 'This is a unit test', 'dueDate': '2020-05-04', 'status': 'TODO'})

        # Testing for update
        self.todo_data = {'text': 'This is a big unit test', 'dueDate': '2020-05-04', 'status': 'DONE'}
        self.putResponse = self.client.put('/api/todos/1/', self.todo_data, format='json')

        self.assertEqual(self.putResponse.status_code, status.HTTP_200_OK)
        self.assertEqual(self.putResponse.data, {'id': 1, 'text': 'This is a big unit test', 'dueDate': '2020-05-04', 'status': 'DONE'})

        # Testing for delete
        self.deleteResponse = self.client.delete('/api/todos/1/', format='json')

        self.assertEqual(self.deleteResponse.status_code, status.HTTP_204_NO_CONTENT)
        
       




# Create your tests here.
