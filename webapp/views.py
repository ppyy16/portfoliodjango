# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, render_to_response

# Create your views here.
def index(request):
	return render_to_response('home.html')

def uiux(request):
	return render_to_response('uiux.html')

def webdev(request):
	return render_to_response('webdev.html')

def art(request):
	return render_to_response('art.html')

def menu(request):
	return render_to_response('menu.html')


def footer(request):
	return render_to_response('footer.html')