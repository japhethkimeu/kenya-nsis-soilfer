# -*- coding: utf-8 -*-
#########################################################################
#
# Copyright (C) 2017 OSGeo
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.
#
#########################################################################

from django.urls import path
from geonode.urls import urlpatterns
from nsid import views

urlpatterns = [
    path('about/nsid/', views.nsid_about, name='nsid_about'),
    path('about/kenya-soils/', views.kenya_soils, name='kenya_soils'),
    path('data/soil-data/', views.soil_data, name='soil_data'),
    path('maps/soil-maps/', views.soil_maps, name='soil_maps'),
] + urlpatterns
